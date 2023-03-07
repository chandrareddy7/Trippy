import React from "react";
import "./destination.css";
import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";
import mountain3 from "../assets/3.jpg";
import mountain4 from "../assets/4.jpg";
import Destinationdata from "./Destinationdata";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <Destinationdata
      cName = "first-desc"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you'll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!"
        image1={mountain1}
        image2={mountain2}
      />
      <Destinationdata
      cName = "first-desc-reverse"
        heading="Mt. Daguldul, Batangas"
        text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano
inside a lake inside an island. If you fancy a closer look, the hike up
to the crater is a mere 45 minutes, and is easy enough for
beginners. Guides will assist you most of the way, and you'll see
the peculiar environment found on an active volcano, including
volcanic rocks and steam vents. The hike can be dusty and hot, so
plan for an early morning trip, and then unwind with some bulalo
before heading back home!"
        image1={mountain3}
        image2={mountain4}
      />
    </div>
  );
}

export default Destination;
