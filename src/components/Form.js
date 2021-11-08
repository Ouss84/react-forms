import React from "react";

const Form = (props) => {
  return (
    <div>
      <label> First name:</label>
      <input type="text" name={props.firstname}></input>
      <label> Last name:</label>
      <input type="text"></input>
      <label> Phone number:</label>
      <input type="phone"></input>
      <label> Role:</label>
      <select name="roles">
        <option value=""></option>
        <option value="CEO">CEO</option>
        <option value="developper">developper</option>
        <option value="designer">designer</option>
      </select>
      <label> Message:</label>
      <textarea name="message" rows="4" cols="50"></textarea>
    </div>
  );
};

export default Form;
