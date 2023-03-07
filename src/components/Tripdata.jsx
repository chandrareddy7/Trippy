import React from "react";

const Tripdata = (props) => {
  return (
    <div className="trip-card">
      <div className="trip-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default Tripdata;
