import React from "react";

const View = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div className="view">
      <div className="view-wrapper">
        <div className="lines"></div>
        <div className="items-view">
          <p>
            Firstname: <span>{firstname}</span>
          </p>
          <p>
            Lastname: <span>{lastname}</span>
          </p>
          <p>
            Phone: <span>{phonenumber}</span>
          </p>
          <p>
            Message: <span>{message}</span>
          </p>
          <p>
            Role: <span>{role}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default View;
