import React from "react";
import myPhoto from "../assets/WhatsApp Image 2024-10-24 at 22.39.14_2d048c98.jpg"; // Replace with correct path

const HomePage = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left Side - Name & Text */}
        <div className="hero-text">
          <h1 className="name"> PAMALA DINESH KUMAR</h1>
          <p className="subtitle">Java Developer | Spring Boot | React</p>
          <p className="intro">
            Passionate about building scalable, user-friendly applications using
            modern technologies like Java, React, Spring Boot, and MongoDB.
          </p>
        </div>

        {/* Right Side - Circular Photo */}
        <div className="hero-photo">
          <img src={myPhoto} alt="Dinesh Kumar" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
