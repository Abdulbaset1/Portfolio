import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { SiGithub, SiInstagram } from 'react-icons/si';
import avatarImg from '../assets/avatar.png';

// Social Icon SVGs
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Hero = () => {
  const roles = ['AI Engineer', 'Software Engineer', 'Web Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [resumeDialogOpen, setResumeDialogOpen] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(120);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(60);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <>
      <section className="hero-container" id="home">
      <div className="hero-content">
        <h3 className="hero-greeting">AI Engineer · Special Report</h3>
        <h1 className="hero-title">Abdul Basit.</h1>

        <div className="hero-subtitle">
          <span>And I'm a </span>
          <span className="typing-text">
            {currentText}
            <span className="typing-cursor">|</span>
          </span>
        </div>

        <p className="hero-bio">
          I work at the intersection of intelligent systems and the modern web. As a front-end developer and AI engineer, I turn ambitious ideas into clear, useful, and engaging digital experiences.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Abdulbaset1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="GitHub"
            title="GitHub"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://instagram.com/abdul._.baset"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="Instagram"
            title="Instagram"
          >
            <SiInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-basit-naeem/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>

        <button
          className="cta-button"
          onClick={() => setResumeDialogOpen(true)}
        >
          Download CV <Download size={18} />
        </button>
      </div>

      <div className="hero-visual">
        <div className="avatar-wrapper">
          <div className="avatar-ring">
            <img
              src={avatarImg}
              alt="Abdul Basit - Web Designer Portrait"
              className="avatar-image"
            />
          </div>
        </div>
      </div>
      </section>

      {resumeDialogOpen && (
        <div className="resume-dialog-backdrop" role="presentation" onClick={() => setResumeDialogOpen(false)}>
          <section
            className="resume-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="resume-dialog-close" type="button" aria-label="Close resume selector" onClick={() => setResumeDialogOpen(false)}>
              <X size={20} />
            </button>
            <span className="resume-dialog-kicker">The Daily Portfolio / Careers Desk</span>
            <h2 id="resume-dialog-title">Choose your edition</h2>
            <p>Select the resume you would like to download.</p>
            <div className="resume-options">
              <a className="resume-option" href="/resumes/ai-engineer-resume.pdf" download>
                <span className="resume-option-number">01</span>
                <span>
                  <strong>AI Engineer Resume</strong>
                  <small>Machine learning, LLMs, and intelligent systems</small>
                </span>
                <span aria-hidden>↓</span>
              </a>
              <a className="resume-option" href="/resumes/software-engineer-resume.pdf" download>
                <span className="resume-option-number">02</span>
                <span>
                  <strong>Software Engineer Resume</strong>
                  <small>Full-stack development, APIs, and systems</small>
                </span>
                <span aria-hidden>↓</span>
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

