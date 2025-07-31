// How It Works Module - React Wrapper
// This file renders the React component within the HubSpot CMS

import React from 'react';
import { render } from 'react-dom';
import HowItWorks from '../../js/components/HowItWorks/HowItWorks';

// Import styles
import '../../js/styles/HowItWorks.css';

// Initialize the component when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
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
