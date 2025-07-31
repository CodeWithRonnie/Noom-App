// How It Works Module - React Wrapper
// This file renders the React component within the HubSpot CMS

const React = require('react');
const { render } = require('react-dom');
const HowItWorks = require('../../js/components/HowItWorks/HowItWorks').default;

// Import styles
require('../../js/styles/HowItWorks.css');

// Initialize the component when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.how-it-works-module');
  
  containers.forEach(container => {
    // Get data attributes from the container
    const heading = container.dataset.heading || '';
    const subheading = container.dataset.subheading || '';
    const backgroundColor = container.dataset.bgColor || '#ffffff';
    const textColor = container.dataset.textColor || '#1a1a1a';
    
    // Parse steps data if provided
    let steps = [];
    try {
      steps = JSON.parse(container.dataset.steps || '[]');
    } catch (e) {
      console.error('Error parsing steps data:', e);
    }
    
    // Render the React component
    render(
      <HowItWorks 
        heading={heading}
        subheading={subheading}
        steps={steps}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />,
      container
    );
  });
});
