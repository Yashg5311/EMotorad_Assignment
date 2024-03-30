import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import "./RightCard.css";
import Popup from './Popup';

const RightCard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="right-card" style={{ width: '300px', border: "5px solid #cccccc98"}}>
      <div className="icon-container2">
        <CiCirclePlus className="icon2" onClick={handleTogglePopup} />
      </div>
      <p className="text2">Add Profile</p>
      {isPopupOpen && <Popup onClose={handleTogglePopup} />}
    </div>
  );
};

export default RightCard;
