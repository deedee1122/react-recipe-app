import React from "react";
import { useNavigate } from "react-router-dom";

const Back = () => {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="btn btn-primary">
      Go Back
    </button>
  );
};

export default Back;
