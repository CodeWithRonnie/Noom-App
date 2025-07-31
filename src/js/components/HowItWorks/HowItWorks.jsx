import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HowItWorks.css';

/**
 * HowItWorks Component
 * 
 * A reusable React component that displays the Noom program steps in an engaging way.
 * Features:
 * - Responsive step cards
 * - Animated step indicators
 * - Customizable content and styling
 */
const HowItWorks = ({ 
  heading = 'How Noom Works', 
  subheading = 'Our psychology-based approach helps you build better habits, one day at a time.',
  steps = [],
  backgroundColor = '#ffffff',
  textColor = '#1a1a1a'
}) => {
  // Default steps if none provided
  const defaultSteps = [
    {
      title: 'Take your assessment',
      description: 'Answer a few questions to personalize your program.',
      icon: '📝'
    },
    {
      title: 'Get your personalized plan',
      description: 'Based on your goals and preferences.',
      icon: '🎯'
    },
    {
      title: 'Learn and track daily',
      description: 'Build healthy habits with our psychology-based approach.',
      icon: '📱'
    },
    {
      title: 'Reach your goals',
      description: 'See real results and maintain your progress long-term.',
      icon: '🏆'
    }
  ];

  const stepsToDisplay = steps.length > 0 ? steps : defaultSteps;

  return (
    <section 
      className="how-it-works" 
      style={{ 
        backgroundColor,
        color: textColor,
        '--noom-green': '#00b289',
        '--noom-dark-green': '#007a63',
        '--noom-light-green': '#e6f5f2',
        '--noom-white': '#ffffff',
        '--noom-black': '#1a1a1a',
        '--noom-dark-gray': '#4a4a4a',
        '--noom-light-gray': '#f5f5f5'
      }}
    >
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">{heading}</h2>
          {subheading && <p className="section-subtitle">{subheading}</p>}
        </header>

        <div className="steps-container">
          {stepsToDisplay.map((step, index) => (
            <div className="step" key={index} data-step={index + 1}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                {step.icon && <div className="step-icon">{step.icon}</div>}
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

HowItWorks.propTypes = {
  /** Main heading for the section */
  heading: PropTypes.string,
  /** Subheading text */
  subheading: PropTypes.string,
  /** Array of step objects with title, description, and optional icon */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  ),
  /** Background color of the section */
  backgroundColor: PropTypes.string,
  /** Text color for the section */
  textColor: PropTypes.string
};

export default HowItWorks;
