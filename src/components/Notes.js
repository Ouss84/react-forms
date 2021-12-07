import React from "react";

const Notes = ({ id, firstname, lastname, phonenumber, message, role }) => {
  return (
    <div>
      <div className="note-area">
        <h4>
          Your note <strong>{id}</strong>:
        </h4>
        <p>
          {firstname} {lastname}
        </p>
        <p>Phone number: {phonenumber}</p>
        <p>
          Role: <em>{role}</em>
        </p>
        <p>
          Wrote this message: "<strong>{message}</strong>".
        </p>
      </div>
    </div>
  );
};

export default Notes;
