import React from "react";
import "../styles/contact.css";
import right from "../assets/rightbackground.jpg";
<link href="https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap" rel="stylesheet"></link>

function contact() {
  return (
    <div className="contact">
      <div className="Upside">
        <h1> Need any help? </h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Your name: </label>
          <input
            name="name"
            placeholder="Please enter your name..."
            type="text"
          />
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            placeholder="Please enter your email..."
            type="email"
          />
          <label htmlFor="text">Questions: </label>
          <textarea
            row="8"
            placeholder="Please type your question here..."
            name="meesage"
          ></textarea>
          <button type="submit"> Send message </button>
        </form>
      </div>
      <div
        className="Downside"
        style={{ backgroundImage: `url(${right})` }}
      ></div>
    </div>
  );
}

export default contact;
