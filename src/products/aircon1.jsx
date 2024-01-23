import React from "react";
import aircon1 from "../images/aircon1.png";

import { IoStorefrontSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function Aircon1() {
  return (
    <section className="ref">
      <div className="ref-img aircon1">
        <img src={`${aircon1}`} alt="" />
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
        <h2>Condura Window Type Inverter Air Conditioner</h2>
        <p>
          Elevate your indoor comfort with the Condura Window Room Inverter Air
          Conditioner. Designed for efficiency and cooling precision, this
          appliance brings a blend of powerful performance and energy-saving
          technology. With its inverter technology, it ensures consistent
          cooling while optimizing energy consumption. Easy to install and
          equipped with smart features, the Condura Window Room Inverter is a
          reliable choice for a cool and comfortable living space.
        </p>
        <div className="checklist">
          <FaCheckCircle />
          Energy-Efficient. Low Energy Consumption
        </div>
        <div className="checklist">
          <FaCheckCircle />
          4 Way Air Flow Cooling
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Clean Indoor Air with Anti-Bacterial Filter
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Dimension: 560 x 375 x 638
        </div>
      </div>
    </section>
  );
}

export default Aircon1;
