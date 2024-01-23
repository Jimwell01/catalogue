import React from "react";
import logo from "../images/logo1.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="logo-sec">
        <img src={`${logo}`} alt="" />
        <h4>WattWise</h4>
        <p>Empower, Innovate, Transform</p>
      </div>
      <div className="page-sec">
        <h5>Pages</h5>
        <ul>
          <li>Home</li>
          <li>Guide</li>
          <li>Article</li>
          <li>About Us</li>
          <li>Tools</li>
          <li>HomeContact Us</li>
        </ul>
      </div>
      <div className="article-sec">
        <h5>Latest Articles</h5>
        <ul>
          <li>Philippines - Oil & Gas</li>
          <li>Top Technologies Transforming Energy in 2021</li>
          <li>Oil and gas technology: Connectivity for higher performance</li>
        </ul>
      </div>
      <div className="socmed-sec">
        <h5>Social Medias</h5>
        <div className="socmed">
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaYoutube />
          </div>
        </div>
        <h5>Help</h5>
        <ul>
          <li>Privacy Policy </li>
          <li>Terms and Condition</li>
        </ul>
      </div>
      <p className="mark">© Copyright 2023 EnerTrackHub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
