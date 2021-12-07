import React from "react";

const Form = ({ submit, choose }) => {
  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="firstname"> First name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          onChange={choose}
        ></input>
      </div>
      <div>
        <label htmlFor="lastname"> Last name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          onChange={choose}
        ></input>
      </div>
      <div>
        <label htmlFor="phonenumber"> Phone number</label>
        <input
          type="phone"
          name="phonenumber"
          id="phonenumber"
          required
          onChange={choose}
        ></input>
      </div>
      <div>
        <label> Message</label>
        <textarea
          name="message"
          rows="2"
          cols="30"
          onChange={choose}
        ></textarea>
      </div>
      <div>
        <label> Role</label>
        <select name="role" id="role" onChange={choose} required>
          <option value=""></option>
          <option value="CEO">CEO</option>
          <option value="developper">developper</option>
          <option value="designer">designer</option>
        </select>
      </div>

      <div>
        <label></label>
        <input type="submit" value="Send " />
      </div>
    </form>
  );
};

export default Form;
