import React from "react";

const Form = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="firstname"> First name:</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          onChange={props.choose}
        ></input>
      </div>
      <div>
        <label htmlFor="lastname"> Last name:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          onChange={props.choose}
        ></input>
      </div>
      <div>
        <label> Phone number:</label>
        <input
          type="phone"
          name="phonenumber"
          id="phonenumber"
          required
          onChange={props.choose}
        ></input>
      </div>
      <div>
        <label> Role:</label>
        <select name="role" id="role" onChange={props.choose}>
          <option value=""></option>
          <option value="CEO">CEO</option>
          <option value="developper">developper</option>
          <option value="designer">designer</option>
        </select>
      </div>
      <div>
        <label> Message:</label>
        <textarea
          name="message"
          rows="4"
          cols="50"
          onChange={props.choose}
        ></textarea>
      </div>
    </form>
  );
};

export default Form;
