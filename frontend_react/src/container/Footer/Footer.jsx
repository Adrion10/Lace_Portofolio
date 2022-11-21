import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";
const Footer = () => {
  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@lace.com" className="p-text">
            hello@lace.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+49 123456789" className="p-text">
            +49 123456789
          </a>
        </div>
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app_whitebg"
);
