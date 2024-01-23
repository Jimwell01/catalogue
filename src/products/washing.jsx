import React from "react";
import washing from "../images/washing.png";

import { IoStorefrontSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function Washing() {
  return (
    <section className="ref">
      <div className="ref-img">
        <img src={`${washing}`} alt="" />
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
        <h2>Dowell WFA-75 Fully Automatic Washing Machine</h2>
        <p>
          Experience efficient and reliable laundry care with the Dowell WFA-75
          Fully Automatic Washing Machine. This appliance is designed to handle
          your laundry needs with ease, featuring advanced washing technology
          for optimal cleanliness and fabric care. With a user-friendly
          interface and a range of washing programs, this washing machine offers
          versatility and convenience. Elevate your laundry routine with the
          performance and durability of the Dowell Washing Machine.
        </p>
        <div className="checklist">
          <FaCheckCircle />
          7.5 kg washing capacity
        </div>
        <div className="checklist">
          <FaCheckCircle />6 washing programs (normal, quick, jeans,
          anti-wrinkle, silk, air-dry)
        </div>
        <div className="checklist">
          <FaCheckCircle />
          6, 9 & 12 minutes wash timer
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Tempered glass cover for actual washing monitoring
        </div>
        <div className="checklist">
          <FaCheckCircle />
          LXWXH: 55 X 57 X96 cm
        </div>
      </div>
    </section>
  );
}

export default Washing;
