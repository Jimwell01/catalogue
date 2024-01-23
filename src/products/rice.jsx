import React from "react";
import rice from "../images/rice-cooker.png";

import { IoStorefrontSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

function Rice() {
  return (
    <section className="ref">
      <div className="ref-img rice">
        <img src={`${rice}`} alt="" />
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
        <h2>EDR-LSP (Drum Type Rice Cooker with Steamer)</h2>
        <p>
          Introducing the Eureka EDR LSP Drum-Type Rice Cooker with Steamer, a
          sophisticated kitchen appliance that simplifies your cooking
          experience. With its innovative drum-type design, this rice cooker
          ensures even cooking, delivering consistently fluffy rice with each
          use. The appliance features versatile cooking modes, catering to
          different rice varieties and culinary preferences. The built-in
          steamer function adds to its utility, enabling you to prepare healthy
          and flavorful steamed dishes effortlessly. Elevate your kitchen with
          the Eureka Drum-Type Rice Cooker, blending practical functionality
          with a sleek and modern design.
        </p>
        <div className="checklist">
          <FaCheckCircle />
          1-Touch Operation
        </div>
        <div className="checklist">
          <FaCheckCircle />Cook rice or steam vegetables
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Keep rice warm, fresh, moist for hours
        </div>
        <div className="checklist">
          <FaCheckCircle />
          Durable printed metal body
        </div>
      </div>
    </section>
  );
}

export default Rice;
