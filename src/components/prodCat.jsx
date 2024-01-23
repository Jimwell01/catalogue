import React from "react";
import { HiLightBulb } from "react-icons/hi";

function ProductCatalogue() {
  return (
    <div className="prod-cat">
      <h2>Product Catalogue</h2>
      <p>
        Explore our comprehensive product catalog, featuring cutting-edge
        solutions designed to elevate your energy efficiency and sustainability.
        From smart appliances to eco-friendly gadgets, each item is curated to
        bring innovation and a greener future into your life.
      </p>
      <div className="floater">
        <div>
          <h3>Energy Tips!</h3>
          <HiLightBulb />
        </div>
        <p>
          Organize items inside the refrigerator to allow for proper air
          circulation. Avoid overcrowding, as this can hinder the unit's
          efficiency.
        </p>
      </div>
    </div>
  );
}

export default ProductCatalogue;
