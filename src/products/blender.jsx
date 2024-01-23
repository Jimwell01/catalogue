import React from "react";
import blender from "../images/blender.png";

import { IoStorefrontSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function Blender() {
  return (
    <section className="ref">
      <div className="ref-img blender">
        <img src={`${blender}`} alt="" />
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
        <h2>Hanabishi Super Blender / Chopper HSBLEND100</h2>
        <p>
          Introducing the Hanabishi Super Blender Chopper, a multifunctional
          kitchen powerhouse designed to simplify your food preparation tasks.
          This versatile appliance features a robust blending mechanism,
          allowing you to effortlessly create smoothies, shakes, and purees.
          With an integrated chopper, it becomes your reliable partner for
          chopping and grinding ingredients with precision. The Hanabishi Super
          Blender Chopper, with its sleek design and user-friendly controls, is
          a stylish addition to your kitchen that combines performance and
          convenience for a seamless culinary experience
        </p>
        <div className="checklist">
          <FaCheckCircle />
          Capacity: 2.0 liter & 0.7 liter cup
        </div>
        <div className="checklist">
          <FaCheckCircle />
          One touch operation with pulse control
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Easy to clean
        </div>
        <div className="checklist">
          <FaCheckCircle />
          220 x 180 x 350mm
        </div>
      </div>
    </section>
  );
}

export default Blender;
