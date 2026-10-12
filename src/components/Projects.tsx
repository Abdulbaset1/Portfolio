import React from 'react';
import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    section: 'AI Research',
    title: 'GenAI Image Captioning',
    summary: 'An exploration of generative AI techniques for producing meaningful captions from images.',
    tag: 'Jupyter Notebook',
    url: 'https://github.com/Abdulbaset1/GenAI_Image_captioning',
  },
  {
    section: 'Engineering Desk',
    title: 'XcelTrack: Cell-Level Version Control',
    summary: 'A version-control concept for tracking changes at the individual spreadsheet-cell level.',
    tag: 'TypeScript',
    url: 'https://github.com/Abdulbaset1/XcelTrack---Cell-Level-Version-Control-for-Excel',
  },
  {
    section: 'AI Research',
    title: 'Document to Markdown VLM QLoRA',
    summary: 'A vision-language model project focused on converting documents into structured Markdown.',
    tag: 'Python',
    url: 'https://github.com/Abdulbaset1/document-to-markdown-vlm-qlora',
  },
  {
    section: 'AI Research',
    title: 'Diffusion Models for High-Resolution Image Generation',
    summary: 'Experiments with diffusion models for generating detailed, high-resolution images.',
    tag: 'Python',
    url: 'https://github.com/Abdulbaset1/Diffusion-Models-for-High-Resolution-Image-Generation',
  },
  {
    section: 'AI Research',
    title: 'Self-Supervised Image Representation with MAE',
    summary: 'A study of masked autoencoders for learning useful image representations without manual labels.',
    tag: 'Python',
    url: 'https://github.com/Abdulbaset1/Self-Supervised-Image-Representation-using-Masked-Autoencoders-MAE-',
  },
  {
    section: 'AI Research',
    title: 'CycleGAN Domain Adaptation',
    summary: 'An image-to-image translation study using CycleGAN for unpaired domain adaptation.',
    tag: 'Jupyter Notebook',
    url: 'https://github.com/Abdulbaset1/Domain-Adaptation-and-Unpaired-Image-to--Image-Translation-using-CycleGAN',
  },
  {
    section: 'AI Research',
    title: 'Doodle to Real Image Translation',
    summary: 'A Pix2Pix experiment that translates simple doodles into realistic, colorized images.',
    tag: 'Jupyter Notebook',
    url: 'https://github.com/Abdulbaset1/Doodle-to-Real-Image-Translation-and-Colorization-using-Pix2Pix',
  },
  {
    section: 'AI Research',
    title: 'Tackling Mode Collapse in GANs',
    summary: 'Experiments investigating mode collapse and possible improvements in generative adversarial networks.',
    tag: 'Jupyter Notebook',
    url: 'https://github.com/Abdulbaset1/Tackling-Mode-Collapse-in-Generative-Adversarial-Networks',
  },
  {
    section: 'Games Desk',
    title: 'Card Matching Game',
    summary: 'A browser-based memory game built around matching pairs and responsive interaction.',
    tag: 'JavaScript',
    url: 'https://github.com/Abdulbaset1/CardMatchingGame',
  },
  {
    section: 'AI Research',
    title: 'RAG for Diagnostic Reasoning',
    summary: 'A retrieval-augmented generation project exploring reasoning over clinical notes.',
    tag: 'Python',
    url: 'https://github.com/Abdulbaset1/RAG-for-Diagnostic-Reasoning-for-Clinical-Notes',
  },
  {
    section: 'Language Desk',
    title: 'Pseudo-code to Code Generation',
    summary: 'A decoder-only language model project for translating pseudo-code into executable code.',
    tag: 'Python',
    url: 'https://github.com/Abdulbaset1/Decoder-Only-Pseudo-code-to-Code-Generation',
  },
  {
    section: 'Language Desk',
    title: 'Text Summarization with T5 and BART',
    summary: 'A comparison of encoder-decoder transformer approaches for automatic text summarization.',
    tag: 'Python',
    url: 'https://github.com/Abdulbaset1/Text-Summarization-T5-BART-Encoder-Decoder',
  },
  {
    section: 'Machine Learning Desk',
    title: 'Customer Feedback Classification',
    summary: 'A machine learning model for classifying and learning from customer feedback.',
    tag: 'Python',
    url: 'https://github.com/Abdulbaset1/Customer-Feedback-Classification-Model',
  },
  {
    section: 'Language Desk',
    title: 'Urdu Chatbot',
    summary: 'A conversational assistant experiment focused on Urdu language interaction.',
    tag: 'Python',
    url: 'https://github.com/Abdulbaset1/Urdu_Chatbot',
  },
  {
    section: 'Language Desk',
    title: 'Urdu to Roman Urdu Translator',
    summary: 'A language utility for converting Urdu writing into Roman Urdu.',
    tag: 'Python',
    url: 'https://github.com/Abdulbaset1/Urdu-to-Roman-Urdu-Translator',
  },
  {
    section: 'Web Desk',
    title: 'E-commerce Store',
    summary: 'A storefront project exploring the structure and flow of an online shopping experience.',
    tag: 'Web',
    url: 'https://github.com/Abdulbaset1/E-commerce-Store',
  },
  {
    section: 'Systems Desk',
    title: 'Banking System Simulation',
    summary: 'A simulation of core banking operations and account workflows.',
    tag: 'Systems',
    url: 'https://github.com/Abdulbaset1/Banking-System-Simulation',
  },
  {
    section: 'Games Desk',
    title: 'Multiplayer Chess Game',
    summary: 'A multiplayer chess project focused on game rules and connected play.',
    tag: 'Game Development',
    url: 'https://github.com/Abdulbaset1/Multiplayer-Chess-Game',
  },
  {
    section: 'Systems Desk',
    title: 'Compiler Construction Project',
    summary: 'A project exploring the stages and mechanics involved in constructing a compiler.',
    tag: 'Compilers',
    url: 'https://github.com/Abdulbaset1/Compiler-Construction-Project',
  },
  {
    section: 'Games Desk',
    title: 'Infinite Runner Game',
    summary: 'A C++ game project built around continuous movement, obstacles, and score progression.',
    tag: 'C++',
    url: 'https://github.com/Abdulbaset1/Infinite-Runner-Game',
  },
  {
    section: 'Engineering Desk',
    title: 'GitHub Stimulation',
    summary: 'A small C++ project inspired by GitHub activity and developer workflow concepts.',
    tag: 'C++',
    url: 'https://github.com/Abdulbaset1/Github_Stimulation',
  },
];

export const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleProjectsToggle = () => {
    if (showAll) {
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAll((current) => !current);
  };

  return (
    <section className="projects-section" id="portfolio">
      <div className="projects-inner">
        <div className="projects-heading">
          <span className="projects-kicker">Projects</span>
          <h2>Projects</h2>
          <p>A selection of stories from the workbench.</p>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article className={`project-card${index === 0 ? ' project-card-featured' : ''}`} key={project.title}>
              <div className="project-meta">
                <span>{project.section}</span>
                <span>GitHub Repository</span>
              </div>
              <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
                View repository <span aria-hidden>↗</span>
              </a>
              <span className="project-tag">{project.tag}</span>
            </article>
          ))}
        </div>

        <button className="projects-toggle" type="button" onClick={handleProjectsToggle}>
          {showAll ? 'Show featured projects' : 'See all projects'} <span aria-hidden>{showAll ? '↟' : '↘'}</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
