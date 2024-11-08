import React from "react";

const SuccessMessage = ({ message, onClose }) => {
  return (
    <div className="alert alert-success w-50 mx-auto text-center mb-3 p-3 d-flex justify-content-between">
      <span>{message}</span>
      <button className="btn btn-close ms-3" onClick={onClose}></button>
    </div>
  );
};

export default SuccessMessage;
