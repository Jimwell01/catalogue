import React from "react";
import aircon2 from "../images/aircon2.png";

import { IoStorefrontSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function Aircon2() {
  return (
    <section className="ref">
      <div className="ref-img">
        <img src={`${aircon2}`} alt="" />
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
        <h2>Union® 1.0 HP Inverter Window Type Air Conditioner</h2>
        <p>
          Introducing the Union 1.0 HP Inverter Window-Type Air Conditioner, a
          powerful and energy-efficient cooling solution for your space. This
          innovative appliance combines cutting-edge inverter technology with a
          convenient window-type design, ensuring optimal comfort with reduced
          energy consumption. Enjoy customizable cooling with multiple modes and
          fan speeds, allowing you to create the perfect indoor climate. The
          Union Air Conditioner is designed for ease of installation and
          operation, making it an ideal choice for those seeking reliable and
          efficient cooling for their home or office.
        </p>
        <div className="checklist">
          <FaCheckCircle />
          Soft-touch control panel with LED display
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Digital control with remote
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Cooling Capacity: 5,454 kJ/hr
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Dimensions: 26.14 x 26.65 x 16.85 in (LxWxH)
        </div>
      </div>
    </section>
  );
}

export default Aircon2;
