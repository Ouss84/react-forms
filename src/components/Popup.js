import React from "react";

const Popup = (props) => {
  return (
    <div className="pop-up">
      <p>First name:{props.firstname}</p>
      <p>Last name:{props.lastname}</p>
      <p>Phone number:{props.phonenumber}</p>
      <p>Role:{props.role}</p>
      <p>Message:{props.message}</p>
    </div>
  );
};

export default Popup;
