import React from "react";
import Ref from "../images/ref.png";

import { IoStorefrontSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function Refrigerator() {
  return (
    <section className="ref">
      <div className="ref-img">
        <img src={`${Ref}`} alt="" />
        <div className="ref-wrapper">
          <button className="shop">
            <h5>Visit shop</h5>
            <IoStorefrontSharp />
          </button>
          <button className="fav">
            <h5>Add to Favorites</h5>
            <CiHeart />
          </button>
        </div>
      </div>
      <div className="ref-details">
        <h2>Hanabishi Double Door Refrigerator</h2>
        <p>
          Experience optimal freshness and convenience with the Hanabishi Double
          Door Refrigerator. This stylish and spacious appliance combines modern
          design with advanced cooling technology, ensuring your groceries stay
          fresh for longer. With adjustable shelves, energy-efficient LED
          lighting, and a sleek stainless steel finish, this refrigerator
          seamlessly blends functionality and aesthetics. Elevate your kitchen
          with the reliability and performance of the Hanabishi Double Door
          Refrigerator.
        </p>
        <div className="checklist">
          <FaCheckCircle />
          Energy Saving
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Saves up to 40% electricity
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Unit dimension: 545x595x1417mm
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Mechanical Temperature Control
        </div>
      </div>
    </section>
  );
}

export default Refrigerator;
