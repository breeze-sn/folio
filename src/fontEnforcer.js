// Font Override Protection
// This script ensures Poppins font is always applied and prevents system/user font overrides

(function enforcePoppinsFont() {
  // Function to enforce Poppins font on all elements
  const enforceFontFamily = () => {
    const elements = document.querySelectorAll('*');
    const poppinsStack = "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
    
    elements.forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const currentFont = computedStyle.fontFamily;
      
      // Check if Poppins is not the primary font
      if (!currentFont.toLowerCase().includes('poppins')) {
        element.style.setProperty('font-family', poppinsStack, 'important');
      }
    });
  };

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enforceFontFamily);
  } else {
    enforceFontFamily();
  }

  // Monitor for DOM changes and enforce font
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            const poppinsStack = "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
            node.style.setProperty('font-family', poppinsStack, 'important');
            
            // Also apply to children
            const children = node.querySelectorAll('*');
            children.forEach(child => {
              child.style.setProperty('font-family', poppinsStack, 'important');
            });
          }
        });
      }
    });
  });

  // Start observing
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  // Periodic check every 500ms to ensure no overrides
  setInterval(enforceFontFamily, 500);

  // Check font loading status
  if (document.fonts) {
    document.fonts.ready.then(() => {
      console.log('Poppins font loaded successfully');
      enforceFontFamily();
    });
  }
})();
