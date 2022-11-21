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
