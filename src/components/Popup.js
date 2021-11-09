import React from "react";

const Popup = (props) => {
  return (
    <div className={props.display ? "pop-up display" : "pop-up "}>
      <div className="popup-wrapper">
        <div className="pop-up">
          <h3>Your note:</h3>
          <p>First name:{props.firstname}</p>
          <p>Last name:{props.lastname}</p>
          <p>Phone number:{props.phonenumber}</p>
          <p>Message:{props.message}</p>
          <p>Role:{props.role}</p>
          <div className="button-wrapper">
            <button onClick={() => window.location.reload()}>
              YES, I am Sure
            </button>
            <button id="discard"> NOPE, DON'T WANT TO POST IT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
