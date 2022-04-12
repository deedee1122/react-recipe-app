import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ label, link, totalTime, dishType, image, cuisineType }) => {
  return (
    <Link to={`/database/${link}`} className="card text-capitalize">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{label}</h5>
        <p>
          <span className="fw-bold">Cook Time : </span>{" "}
          {totalTime === 0 ? 10 : totalTime} minutes
          <br />
          <span className="fw-bold">dish Type : </span> {dishType}
        </p>
        <div className="btn btn-success">{cuisineType}</div>
      </div>
    </Link>
  );
};

export default Cards;
