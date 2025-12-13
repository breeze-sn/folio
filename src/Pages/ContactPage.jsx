import React, { useState } from 'react'
import styles from "./contact.module.css"
import { useSelector } from 'react-redux'
import Icon from '../Components/global/Icon'
import * as images from "../Images/index"
import InputField from '../Components/global/InputField'
import SEO from '../Components/global/SEO'

function ContactPage() {
    const theme = useSelector((state) => state.themeReducer.mode)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [submitStatus, setSubmitStatus] = useState('')

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const sendMessage = async () => {
        // Validate form data
        if (!formData.name.trim()) {
            setSubmitStatus('Please enter your name')
            return
        }
        if (!formData.email.trim() || !formData.email.includes('@')) {
            setSubmitStatus('Please enter a valid email')
            return
        }
        if (!formData.message.trim()) {
            setSubmitStatus('Please enter a message')
            return
        }

        setSubmitStatus('Sending...')

        try {
            const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyM5Kj9gNSkapYRGV1TxIYKs_X-vDBQ4tHKHGBN2mRdBEWYBqO-Arq2XVcJHeAU_r-Xgg/exec"          
            const now = new Date()
            const date = now.toLocaleDateString('en-US', {  day: '2-digit', month: '2-digit', year: 'numeric' })
            const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
            
            // Store form data before reset
            const dataToSend = {
                date: date,
                time: time,
                name: formData.name,
                email: formData.email,
                message: formData.message
            }
            
            console.log('Sending data:', dataToSend)
            
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend)
            })

            // Note: mode: 'no-cors' doesn't return response data, so we assume success
            setSubmitStatus('Message sent successfully!')
            
            // Reset form after successful send
            setFormData({
                name: '',
                email: '',
                message: ''
            })

            // Clear status message after 3 seconds
            setTimeout(() => setSubmitStatus(''), 3000)
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('Failed to send message. Please try again.')
            setTimeout(() => setSubmitStatus(''), 3000)
        }
    }

    return (
        <>
            <SEO 
                title="Contact - Simran Nagekar"
                description="Get in touch with Simran Nagekar for game design collaborations, projects, or inquiries. Let's create something amazing together."
                url="https://simrann.dev/contact"
            />
            <div className={styles.contact_container} data-theme={theme}>
                <div className={styles.header}>
                    <span>Contact</span>
                    <h1>Get in touch.</h1>
                    <InputField 
                        placeholder="Name" 
                        type="text" 
                        value={formData.name}
                        onChange={(value) => handleInputChange('name', value)}
                    />
                    <InputField 
                        placeholder="Email" 
                        type="email" 
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                    />
                    <InputField 
                        placeholder="Message" 
                        type="textarea" 
                        value={formData.message}
                        onChange={(value) => handleInputChange('message', value)}
                    />
                    {submitStatus && <p className={styles.status_message}>{submitStatus}</p>}
                    <section onClick={sendMessage}>
                        <p>Submit</p>
                        <Icon DarkMode={images.PAPER_PLANE} LightMode={images.PAPER_PLANE}></Icon>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ContactPage
