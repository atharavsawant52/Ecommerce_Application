import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello, my name is <strong>Atharav Sawant</strong>. I am a React
            Developer currently pursuing a Bachelor's in Computer Science and
            living in Thane.
          </p>
          <p>
            I have strong technical skills in <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong>, and{" "}
            <strong>React</strong>. I have developed various projects, including
            anime websites, the Jarvis Company website, and basic UI designs,
            showcasing my expertise.
          </p>
          <p>
            I am certified in Frontend Development by <strong>Techpaathshala</strong> 
            and plan to expand my skills in <strong>Backend Development</strong> in the future.
          </p>
          <p>
            As a fresher, my short-term goal is to secure a job to enhance my
            skills and gain practical experience in the industry.
          </p>
          <p>Thank you.</p>
        </div>
        <div className="about-image">
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/ecommerce%20marketing.jpg" 
            alt="Ecommerce"
          />
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <div className="icon">💻</div>
          <h3>HTML, CSS, JS, React</h3>
          <p>Technologies I specialize in</p>
        </div>
        <div className="stat-box highlight">
          <div className="icon">🖥️</div>
          <h3>Frontend Development</h3>
          <p>Certifications and expertise in frontend technologies</p>
        </div>
        <div className="stat-box">
          <div className="icon">🚀</div>
          <h3>Projects</h3>
          <p>Various projects showcasing my skills in web development</p>
        </div>
        <div className="stat-box">
          <div className="icon">🎯</div>
          <h3>Career Goal</h3>
          <p>Secure a job to enhance my skills and gain practical experience</p>
        </div>
      </div>
    </div>
  );
};

export default About;
