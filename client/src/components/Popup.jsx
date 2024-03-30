import React, { useState } from 'react';
import './Popup.css'; // Import Popup.css for styling

const Popup = ({ onClose }) => {
  const [tab, setTab] = useState('basic');

  const handleClose = () => {
    onClose();
  };

  const handleTabChange = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="popup-background">
      <div className="popup">
        <div className="popup-header">
          <h2>Add Profile</h2>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>
        <div className="popup-body">
          <div className="tabs">
            <button className={tab === 'basic' ? 'active' : ''} onClick={() => handleTabChange('basic')}>Basic</button>
            <button className={tab === 'contact' ? 'active' : ''} onClick={() => handleTabChange('contact')}>Contact</button>
          </div>
          <div className="form">
            {tab === 'basic' && (
              <div>
                <div className="input-container">
                  <label htmlFor="name">Enter Name*</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="input-container">
                  <label htmlFor="email">Enter Email*</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="input-container">
                  <label htmlFor="phone">Enter Phone*</label>
                  <input type="text" id="phone" placeholder="Enter your phone number" />
                </div>
                <button className="next-btn" onClick={() => handleTabChange('contact')}>Next</button>
              </div>
            )}
            {tab === 'contact' && (
              <div>
                 <label>Enter Instagram</label>
                <input type="text" placeholder="Instagram Link (optional)" />
                <label>Enter Youtube Link</label>
                <input type="text" placeholder="Youtube Link (optional)" />
                <div className="buttons">
                  <button className="back-btn" onClick={() => handleTabChange('basic')}>Back</button>
                  <button className="done-btn" onClick={handleClose}>Done</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
