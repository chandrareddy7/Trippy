import "./destination.css";
import React from "react";

export default function Destinationdata(props) {
  return (
    <div>
      <div className={props.cName}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>
            {props.text}
          </p>
        </div>
        <div className="images">
          <img src={props.image1} alt="image" />
          <img src={props.image2} alt="image" />
        </div>
      </div>
    </div>
  );
}
