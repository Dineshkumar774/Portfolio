import React from 'react';
import profilePic from '../assets/WhatsApp Image 2024-10-24 at 22.39.14_2d048c98.jpg'; // Your photo

const About= () => {
  return (
    <div className="about-content">
      {/* Photo, Name, Email */}
      <div className="about-photo">
        <img src={profilePic} alt="Dinesh Kumar" />
        <div className="about-name">Dinesh Kumar</div>
        <div className="about-email">dinesh@example.com</div>
      </div>

      {/* Intro and Qualifications */}
      <h2 className="about-title">About Me</h2>
      <p className="about-intro">
        I'm a passionate full-stack developer with expertise in Java, Spring Boot,
        React, and cloud technologies. I love building scalable applications and
        solving complex problems.
      </p>

      <ul className="qualifications">
        <li>B.Tech in Computer Science, XYZ University</li>
        <li>Certified Java and Spring Developer</li>
        <li>2+ years experience in full-stack development</li>
        <li>Contributor to open-source projects</li>
      </ul>
    </div>
  );
};

export default About;
