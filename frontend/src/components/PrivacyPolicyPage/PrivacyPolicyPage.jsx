import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './PrivacyPolicyPage.css';
import '../../index.css';

// PrivacyPolicyPage shows the privacy policy and forces the user to scroll to the bottom before closing
export const PrivacyPolicyPage = ({ onClose }) => {
    const [reachedBottom, setReachedBottom] = useState(false);

    const date = "05/07/2024";
    const gameName = "Factortastic";
    const contactInfo = "info@factortastic.com";

    // Create scroll event listener in privacy-policy-content 
    useEffect(() => {
        const privacyPolicyContent = document.querySelector('.privacy-policy-content');
        if (privacyPolicyContent) {
            privacyPolicyContent.addEventListener('scroll', handleScroll);

            return () => privacyPolicyContent.removeEventListener('scroll', handleScroll);
        }
    }, []);

   // Track scroll position within privacy-policy-content 
   const handleScroll = (event) => {
        const target = event.target;
        const currentPosition = target.scrollTop;
        const maxScroll = target.scrollHeight - target.clientHeight;
        
        if (currentPosition + 50 >= maxScroll) {
            setReachedBottom(true);
        }
    };

    return (
        <div className="privacy-policy-page">
            <button 
                className="settings-text back-button" 
                onClick={onClose} 
                disabled={!reachedBottom}
                aria-label="Close Privacy Policy"
            >
                Back
            </button>

            <div className="privacy-policy-content" onScroll={handleScroll}>
                <p className="settings-text">
                    Privacy Policy for {gameName} <br />
                    Last Updated: {date} <br /><br /><br />

                    1. Introduction <br />
                    {gameName} is a fun, engaging, and educational web game designed to teach multiplication to children aged 5-8 years. This Privacy Policy outlines our commitment to the privacy and protection of the personal information of our young users and their guardians. <br /><br /><br />

                    2. Compliance with Children’s Privacy Laws <br />
                    Our game fully complies with the Children's Online Privacy Protection Act (COPPA) in the United States, the General Data Protection Regulation (GDPR) in Europe, and other relevant child privacy laws worldwide.<br /><br /><br />

                    3. Information Collection and Use <br />

                    a. Non-Personal Information:<br />

                    Data Collected: Includes game scores, user progress, interaction data, device type, browser type, and IP address for technical purposes. <br />
                    Purpose: To enhance user experience, improve game functionality, and for analytical purposes.<br /><br /><br />
                    
                    b. Personal Information:<br />

                    Data Collected: Limited to username (not the child's real name), parent’s email address, and age verification.<br />
                    Parental Consent: Obtained through a verifiable method. Parents/guardians are required to provide consent and can review the information provided by their child.<br /><br /><br />
                    
                    c. Cookies and Similar Technologies:<br />

                    Use: We use cookies to maintain user session integrity and collect aggregate data on platform usage.<br />
                    Control: Parents/guardians can disable cookies through browser settings, though this may affect game functionality.<br /><br /><br />

                    4. Parental Rights<br />

                    Review and Deletion: Parents can review their child’s personal information, ask to have it deleted, and refuse to allow any further collection.<br />
                    Consent Revocation: At any time, parents can revoke their consent and request the deletion of their child’s information.<br /><br /><br />

                    5. Data Sharing and Disclosure<br />

                    Limited Sharing: Only shared with third-party service providers for essential services (e.g., hosting, data analysis) under strict confidentiality agreements.<br />
                    Legal Requirements: Information may be disclosed if required by law or if necessary to protect the safety and security of users.<br /><br /><br />
                    
                    6. Data Security<br />

                    Measures Taken: We employ industry-standard encryption and security measures to protect against unauthorized access, alteration, disclosure, or destruction.<br />
                    Data Breach Protocol: In the event of a data breach, we will take immediate steps to mitigate harm and notify affected users and regulatory authorities as required by law.<br /><br /><br />
                    
                    7. Updates to This Policy<br />

                    Notifications: Any significant changes to our privacy practices will be communicated through our website and, where appropriate, through direct communication with users.<br /><br />
                    
                    8. Contact Information<br />
                    For questions, concerns, or to exercise parental rights related to this policy, please contact us at {contactInfo}.<br /><br /><br /><br />

                    End Of User Agreement
                </p>
            </div>
        </div>
    );
};

PrivacyPolicyPage.propTypes = {
    onClose: PropTypes.func.isRequired
};