import React from "react";
import "./contacts.css";

const Contacts: React.FC = () => {
  return (
    <div className="contacts-container">
      <div className="content">
        <div className="text-row">
          <h1 className="text">Contact Me</h1>
          <h1 className="text">⇓ ⇓</h1> 
        </div>
        <div className="contact-row">
            <p>Email: </p>
            <p className="contact">nickshahbaz135@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;