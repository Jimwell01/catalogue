import React from "react";
import oven from "../images/oven.png";

import { IoStorefrontSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function Oven() {
  return (
    <section className="ref">
      <div className="ref-img">
        <img src={`${oven}`} alt="" />
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
        <h2>Whirlpool MWP 305 ES Microwave Oven</h2>
        <p>
          Introducing the Whirlpool MWP 305 ES Microwave Oven, a versatile
          kitchen companion designed for modern cooking needs. With a generous
          30-liter capacity, this appliance accommodates a variety of dishes,
          from quick snacks to full meals. The microwave features intuitive
          controls and multiple cooking presets for convenience, while the grill
          function adds a delightful touch of crispiness to your culinary
          creations. The Whirlpool MWP 305 ES Microwave Oven combines efficiency
          and innovation, making it an essential addition to any kitchen for
          efficient and flavorful cooking.
        </p>
        <div className="checklist">
          <FaCheckCircle />
          Auto-cook Functions
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Digital Control
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Input Power: 1400W
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Dimension HxWxD: 30 x 53.9 x 39.8 cm
        </div>
      </div>
    </section>
  );
}

export default Oven;
