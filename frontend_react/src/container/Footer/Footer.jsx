import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";
const Footer = () => {
  return <div>Footer</div>;
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app_whitebg"
);
