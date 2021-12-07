import React from "react";

const Popup = ({ firstname, lastname, phonenumber, message, role, post }) => {
  return (
    <div className="popup-wrapper">
      <div className="pop-up">
        <h3>Your notes:</h3>
        <div className="pop-inside">
          <p>
            First name:<span>{firstname}</span>
          </p>
          <p>
            Last name:<span>{lastname}</span>
          </p>
          <p>
            Phone number:<span>{phonenumber}</span>
          </p>
          <p>
            Message:<span>{message}</span>
          </p>
          <p>
            Role:<span>{role}</span>
          </p>
        </div>
        <div className="button-wrapper">
          <button onClick={post}>YES, I am Sure</button>
          <button id="discard" onClick={post}>
            NOPE, DON'T WANT TO POST IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
