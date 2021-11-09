import React from "react";

const View = (props) => {
  return (
    <div>
      <h1>Check your input:</h1>
      <div className="view-wrapper">
        <div className="lines"></div>
        <div className="items-view">
          <p>
            First name <span>{props.firstname}</span>
          </p>
          <p>
            Last name <span>{props.lastname}</span>
          </p>
          <p>
            Phone number <span>{props.phonenumber}</span>
          </p>
          <p>
            Message <span>{props.message}</span>
          </p>
          <p>Role {props.role}</p>
        </div>
      </div>
    </div>
  );
};

export default View;
