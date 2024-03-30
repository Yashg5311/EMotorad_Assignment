import React, { useState } from 'react';
import './Popup.css'; // Import Popup.css for styling

const Popup = ({ onClose }) => {
  const [tab, setTab] = useState('basic');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [insta,setInsta] = useState('');
  const [youtube,setYoutube] = useState('');

  const handleClose = () => {
    onClose();
    console.log(name,email,phone,insta,youtube);
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
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter your name" />
                </div>
                <div className="input-container">
                  <label htmlFor="email">Enter Email*</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </div>
                <div className="input-container">
                  <label htmlFor="phone">Enter Phone*</label>
                  <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" />
                </div>
                <button className="next-btn" onClick={() => handleTabChange('contact')}>Next</button>
              </div>
            )}
            {tab === 'contact' && (
              <div>
                 <label>Enter Instagram</label>
                <input type="text" value={insta} onChange={(e) => setInsta(e.target.value)} placeholder="Instagram Link (optional)" />
                <label>Enter Youtube Link</label>
                <input type="text" value={youtube} onChange={(e) => setYoutube(e.target.value)} placeholder="Youtube Link (optional)" />
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
