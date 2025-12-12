# Google Sheets Integration Setup

This guide will help you set up Google Sheets to receive contact form submissions from your portfolio website.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Portfolio Contact Submissions"
4. In the first row, add these headers:
   - A1: `Date`
   - B1: `Time`
   - C1: `Name`
   - D1: `Email`
   - E1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Log incoming data for debugging
    Logger.log('Received data: ' + e.postData.contents);
    
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Log parsed data
    Logger.log('Parsed data: ' + JSON.stringify(data));
    
    // Append the data to the sheet in the correct order
    // Order: Date, Time, Name, Email, Message
    sheet.appendRow([
      data.date || '',
      data.time || '',
      data.name || '',
      data.email || '',
      data.message || ''
    ]);
    
    // Send email notification
    sendEmailNotification(data.date, data.time, data.name, data.email, data.message);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(date, time, name, email, message) {
  var recipient = "nagekarsimran@outlook.com";
  
  var subject = (name || 'Unknown Visitor') + " - New Contact Form Submission";
  
  var htmlBody = 
    '<div style="font-family: \'Poppins\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff;">' +
    '  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">' +
    '  <div style="border: 2px solid #000000; padding: 0;">' +
    '    ' +
    '    <div style="background-color: #000000; color: #ffffff; padding: 20px; border-bottom: 2px solid #000000;">' +
    '      <h1 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px; font-family: \'Poppins\', sans-serif;">New Message</h1>' +
    '    </div>' +
    '    ' +
    '    <div style="padding: 30px; background-color: #ffffff;">' +
    '      ' +
    '      <p style="margin: 0 0 20px 0; font-weight: 600; color: #000000; font-size: 16px; font-family: \'Poppins\', sans-serif;">Details</p>' +
    '      ' +
    '      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; font-family: \'Poppins\', sans-serif;">' +
    '        <tr>' +
    '          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #000000; width: 100px;">Date</td>' +
    '          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333333;">' + (date || 'N/A') + '</td>' +
    '        </tr>' +
    '        <tr>' +
    '          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #000000;">Time</td>' +
    '          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333333;">' + (time || 'N/A') + '</td>' +
    '        </tr>' +
    '        <tr>' +
    '          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #000000;">Name</td>' +
    '          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #000000; font-weight: 500;">' + (name || 'N/A') + '</td>' +
    '        </tr>' +
    '        <tr>' +
    '          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #000000;">Email</td>' +
    '          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;"><a href="mailto:' + (email || '') + '" style="color: #000000; text-decoration: underline;">' + (email || 'N/A') + '</a></td>' +
    '        </tr>' +
    '      </table>' +
    '      ' +
    '      <div style="margin-top: 20px; font-family: \'Poppins\', sans-serif;">' +
    '        <p style="margin: 0 0 10px 0; font-weight: 600; color: #000000; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>' +
    '        <div style="padding: 20px; background-color: #f5f5f5; border-left: 3px solid #000000; color: #333333; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">' + (message || 'No message provided') + '</div>' +
    '      </div>' +
    '      ' +
    '      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">' +
    '        <a href="mailto:' + (email || '') + '?subject=Re: Portfolio Contact" style="display: inline-block; padding: 12px 24px; background-color: #000000; color: #ffffff; text-decoration: none; font-weight: 500; font-size: 14px; border: 2px solid #000000; font-family: \'Poppins\', sans-serif;">Reply</a>' +
    '      </div>' +
    '      ' +
    '    </div>' +
    '    ' +
    '    <div style="background-color: #f5f5f5; padding: 15px 30px; border-top: 1px solid #e0e0e0; text-align: center; font-family: \'Poppins\', sans-serif;">' +
    '      <p style="margin: 0; color: #666666; font-size: 12px;">Saved to Google Sheet</p>' +
    '    </div>' +
    '    ' +
    '  </div>' +
    '</div>';
  
  var plainBody = 
    "NEW MESSAGE\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "DETAILS\n\n" +
    "Date:    " + (date || 'N/A') + "\n" +
    "Time:    " + (time || 'N/A') + "\n" +
    "Name:    " + (name || 'N/A') + "\n" +
    "Email:   " + (email || 'N/A') + "\n\n" +
    "MESSAGE:\n" +
    "─────────────────────────────────────────\n" +
    (message || 'No message provided') + "\n" +
    "─────────────────────────────────────────\n\n" +
    "Saved to Google Sheet.\n\n" +
    "Reply to: " + (email || 'N/A');
  
  // Send email with both HTML and plain text
  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: plainBody,
    htmlBody: htmlBody
  });
}

function doGet(e) {
  return ContentService.createTextOutput("Contact Form API is running");
}
```

4. Click on the **Save** icon (💾) and name your project (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. Click on **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Fill in the details:
   - **Description**: "Contact Form API"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
6. **Copy the Web app URL** that appears (it will look like: `https://script.google.com/macros/s/XXXXX/exec`)

## Step 4: Update Your React Code

1. Open `src/Pages/ContactPage.jsx`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your actual Web app URL from Step 3

Example:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzXXXXXXXXXXXXXXXXXXXXXXXX/exec'
```

## Step 5: Test Your Form

1. Run your React app
2. Go to the contact page
3. Fill out the form and submit
4. Check your Google Sheet - a new row should appear with the submission data!

## Troubleshooting

### Email notifications not working
**Solution:**
1. In your Apps Script, find this line in the `sendEmailNotification` function:
   ```javascript
   var recipient = "your-email@example.com";
   ```
2. Replace `"your-email@example.com"` with YOUR actual email address
   ```javascript
   var recipient = "nagekarsimran@gmail.com";  // Use your actual email
   ```
3. **IMPORTANT:** After changing the email, you MUST redeploy:
   - Click **Deploy** → **Manage deployments**
   - Click the edit icon (✏️)
   - Select **"New version"** from the dropdown
   - Click **Deploy**
4. Submit a test form and check:
   - Your inbox (it should arrive within seconds)
   - Your spam/junk folder
   - Apps Script execution logs (Extensions → Apps Script → Executions) for any email errors

### Form submits but data doesn't appear in sheet
- Make sure you deployed the script as "Anyone" can access
- Check that the Web app URL is correct in your code
- Look at the Apps Script execution logs (Extensions → Apps Script → Executions)

### CORS errors in console
- The code uses `mode: 'no-cors'` which is normal for Google Apps Script
- The form should still work even with console warnings

### Need to update the script
1. Make changes in Apps Script editor
2. Click **Deploy** → **Manage deployments**
3. Click the edit icon (✏️) next to your deployment
4. Change the version to "New version"
5. Click **Deploy**

## Security Notes

- The endpoint is public, so anyone with the URL can submit data
- Consider adding rate limiting or spam protection if needed
- You can add server-side validation in the Apps Script code

## Optional Enhancements

### Add Email Notifications
Add this function to your Apps Script to get email notifications:

```javascript
function sendEmailNotification(name, email, message) {
  var recipient = "nagekarsimran@outlook.com"; // Change this to your email
  var subject = "New Contact Form Submission from " + name;
  var body = "Name: " + name + "\n" +
             "Email: " + email + "\n" +
             "Message: " + message;
  
  MailApp.sendEmail(recipient, subject, body);
}
```

Then call it in your `doPost` function:
```javascript
// After sheet.appendRow([...])
sendEmailNotification(data.name, data.email, data.message);
```

### Additional Formatting
The date and time are already formatted separately in the React app. The date format is MM/DD/YYYY and time is in 24-hour format (HH:MM:SS).
