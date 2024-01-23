import React from "react";
import efan from "../images/efan.png";

import { IoStorefrontSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function Efan() {
  return (
    <section className="ref">
      <div className="ref-img efan">
        <img src={`${efan}`} alt="" />
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
        <h2>Asahi DC-6082</h2>
        <p>
          Introducing the Asahi DC-6082 Refrigerator, a sleek and efficient
          addition to your kitchen. This appliance boasts a spacious interior
          and advanced cooling technology, providing optimal preservation for
          your food and beverages. With its modern design and energy-efficient
          features, the Asahi DC-6082 seamlessly combines style and
          functionality. The refrigerator's thoughtful layout, adjustable
          shelves, and temperature control options make it a reliable choice for
          those seeking a versatile and reliable cooling solution.
        </p>
        <div className="checklist">
          <FaCheckCircle />
          16″ (405mm) 5-leaf AS plastic fan blade
        </div>
        <div className="checklist">
          <FaCheckCircle />
          LED display for speed, preset & timer function
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Max speed: 1,000 RPM
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Max airflow: 54.5 m³/min
        </div>
      </div>
    </section>
  );
}

export default Efan;
