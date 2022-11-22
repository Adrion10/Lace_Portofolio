import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
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
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <textarea
            className="p-text"
            name={message}
            placeholder="Your Message"
            value={message}
            onChange={handleChangeInput}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="button" className="p-text" onCllick={handleSubmit}>
          {loading ? "Sending" : "Send Message"}
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app_whitebg"
);
