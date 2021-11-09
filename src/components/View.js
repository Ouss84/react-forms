import React from "react";

const View = (props) => {
  return (
    <div>
      <h1>Check your input:</h1>
      <div className="view-wrapper">
        <div class="lines"></div>
        <div className="items-view">
          <p>First name {props.firstname}</p>
          <p>Last name {props.lastname}</p>
          <p>Phone number {props.phonenumber}</p>
          <p>Message {props.message}</p>
          <p>Role {props.role}</p>
        </div>
      </div>
    </div>
  );
};

export default View;
