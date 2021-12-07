import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <h3>Check your input:</h3>
      <div className="view-wrapper">
        <div className="lines"></div>
        <div className="items-view">
          <p>
            Firstname: <span>{props.first}</span>
          </p>
          <p>
            Lastname: <span>{props.last}</span>
          </p>
          <p>
            Phone: <span>{props.phone}</span>
          </p>
          <p>
            Message: <span>{props.message}</span>
          </p>
          <p>
            Role: <span>{props.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default View;
