import React from 'react';
import avatarImg from '../assets/avatar.png';
import './About.css';

export const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-heading">
          <span className="about-kicker">About / Profile</span>
          <h2>About<br />me</h2>
          <a className="about-email" href="mailto:abdulbaset1878@gmail.com">
            abdulbaset1878@gmail.com <span aria-hidden>↗</span>
          </a>
        </div>

        <figure className="about-photo">
          <span className="about-photo-label">Portrait / 01</span>
          <div className="about-photo-frame">
            <img src={avatarImg} alt="Abdul Basit" />
          </div>
          <figcaption>Abdul Basit · AI Engineer</figcaption>
        </figure>

        <div className="about-copy">
          <p>
            I am a Computer Science graduate from FAST-NUCES with hands-on experience in software development, AI/ML, and full-stack application development. I have worked with Python, JavaScript/TypeScript, React, Node.js, REST APIs, SQL, and Git, and have also developed projects involving machine learning, LLMs, and RAG systems.
          </p>
          <p>
            During my final-year project, I worked on the backend of XcelTrack, a full-stack Excel collaboration and version-control platform, where I gained practical experience in API development, authentication, file processing, and backend system design. I have also worked on several AI/ML projects involving LangChain, FAISS, NLP, computer vision, and modern LLMs.
          </p>
          <p>
            I am a fast learner, enjoy solving technical problems, and am comfortable learning new technologies when required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
