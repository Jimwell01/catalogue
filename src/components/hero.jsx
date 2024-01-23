import React from "react";
import Header from "./header";

function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="hero-wrapper">
        <h1>WattWise</h1>
        <h3>Your Energy Companion </h3>
        <p>
          Explore sustainable practices, manage your energy usage, and stay
          updated with the latest innovations for a greener future.
        </p>
      </div>
    </section>
  );
}

export default Hero;
