// App.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone,FaExternalLinkAlt } from 'react-icons/fa'; 
import Typewriter from 'typewriter-effect';
import myImage from './Floppa.png'; // Import the image
import './App.css';

const typewriterTexts = [
  'Objective: <split> Passionate software developer seeking to develop technical skills in various fields of computer science and gain hands-on experience in real-world projects.',
  'Skills: <split>Fullstack Web and App development,Game development and 3d Modelling,Functional Programming and Verification Languages',
  'Experience: <split>1.5 years Reasearch Assistant at DFKI in domain of Deep Learning, Math Tutoring at the University, and IT and Software development at Kalku', 
  'Interests: <split>Big Floppa,Big Floppa....and BIG FLOPPA !!!!!',
  // ... more texts
];  

const contactLinks = [
  { href: "mailto:baha00002@stud.uni-saarland.de", icon: <FaEnvelope />, text: "baha00002@stud.uni-saarland.de" },
  { href: "tel:+4915734939055", icon: <FaPhone />, text: "+49 1573 4939055" },
  { href: "https://linkedin.com/in/bashar-hamade-a89685229", icon: <FaLinkedin />, text: "LinkedIn" },
  { href: "https://github.com/BasharHamade12", icon: <FaGithub />, text: "GitHub" }
];
const Header = () => (
  <header
    style={{
      display: 'flex',
      flexDirection: 'row',
      height: '50vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    {/* Left side (image) */}
    <div
      style={{
        flex: 1,
        position: 'relative',
        height: '100%',
        minWidth: '50%', // Set minimum width for desktop
      }}
    >
      <img
        src={myImage}
        alt="Profile"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>

    {/* Right side (content) */}
    <div
      style={{
        flex: 1,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1.5rem',
        height: '100%',
        minWidth: '50%', // Set minimum width for desktop 
        
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#2d2d2d' // Add background color for better visibility
      }}
    >
      <div style={{
        color: "#ff6b6b",
        textShadow: "0 0 10px rgba(255, 107, 107, 0.5)", 
        fontSize: "1.2rem", 
        maxWidth : "90%",
        lineHeight: 1.2
      }}>
        <Typewriter
          options={{
            strings: typewriterTexts,
            autoStart: true,
            loop: true,
            delay: 20,
            pauseFor: 500,
          }}
        />
      </div>

      <footer>
  <div style={{ 
    display: 'flex',
    flexDirection: 'row',
    gap: '1.5rem',
    paddingTop: "2rem",
    flexWrap: 'wrap',
    justifyContent: 'center', 
    maxWidth : '80%'
  }}>
    {contactLinks.map((link, index) => (
      <a 
        key={index} 
        href={link.href} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          padding: '0.75rem 1.25rem',
          borderRadius: '25px',
          backgroundColor: 'rgba(255, 107, 107, 0.1)',
          border: '1px solid rgba(255, 107, 107, 0.3)',
          textDecoration: 'none',
          color: '#e0e0e0',
          transition: 'all 0.3s ease',
          minWidth: 'fit-content',
          backdropFilter: 'blur(4px)',
          ':hover': {
            backgroundColor: 'rgba(255, 107, 107, 0.2)',
            borderColor: '#ff6b6b',
            boxShadow: '0 0 10px rgba(255, 107, 107, 0.3)',
            transform: 'translateY(-2px)'
          }
        }}
      >
        {React.cloneElement(link.icon, { 
          style: { 
            color: '#ff6b6b',
            fontSize: '1.25rem',
            transition: 'color 0.3s ease'
          } 
        })}
        <span style={{ 
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '0.95rem',
          fontWeight: '500'
        }}>
          {link.text}
        </span>
      </a>
    ))}
  </div>
</footer>
    </div>
  </header>
);

const Section = ({ title, children }) => (
  <section className="section">
    <h2>{title}</h2>
    {children}
  </section>
);

const Education = () => (
  <Section title="Education">
    <div className="education-container">
      <div className="education-card">
        <div className="education-entry">
          <h3>Informatik (Bachelor)</h3>
          <p className="education-institution">Universität des Saarlandes, Germany</p>
          <div className="education-details">
            <span className="education-dates">2022 – Present</span>
          </div>
        </div>
      </div>
      <div className="education-card">
        <div className="education-entry">
          <h3>Computer Science (Bachelor)</h3>
          <p className="education-institution">Lebanese University - Faculty of Sciences, Lebanon</p>
          <div className="education-details">
            <span className="education-dates">2019 – 2021</span>
          </div>
        </div>
      </div>
      <div className="education-card">
        <div className="education-entry">
          <h3>High School Certificate (General Science)</h3>
          <p className="education-institution">Education & Teaching Secondary School, Beirut, Lebanon</p>
          <div className="education-details">
            <span className="education-dates">Graduated 2019</span>
            <div className="education-grade">
              Final Grade: 15.64/20 (Equivalent to German Abitur 2.3)
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
const Skills = () => {
  const skillsData = [
    {
      title: 'Knowledge in Multiple Languages',
      items: ['Java', 'C', 'C++', 'Assembly', 'JavaScript', 'PHP', 'Python', 'C#', 
              'OCaml', 'Coq', 'Lean4', 'Rust', 'Go']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Knowledgeable in deep learning frameworks and hands-on experience with deep learning projects. Contributed to Autonomous driving projects at DFKI.',
      items: [
        'Deep Learning frameworks (TensorFlow, Keras)',
        'Neural Network implementation',
        'Autonomous driving systems',
        'Real-time TCP socket connections between Unity and TensorFlow',
        'Python scripting for instance segmentation'
      ]
    },
    {
      title: 'Efficiency in Functional Programming',
      description: 'Deep knowledge in OCaml, including building a mini OCaml compiler from university course content.'
    },
    {
      title: 'Proof Assistants & Formalization',
      description: 'Expertise in Coq and Lean4 for formal verification and theorem proving.',
      items: [
        'Completed Natural Numbers Game course in Lean',
        'Progressing through "Mathematics in Lean" course',
        'Formal verification of concurrent systems (CCS)',
        'Strong/weak bisimulation equivalence proofs'
      ]
    },
    {
      title: 'Full-Stack Web and App Development',
      items: [
        'MERN Stack (MongoDB, Express, React, Node.js)',
        'React Native mobile apps',
        'Python (Django, Flask)',
        'REST API development',
        'WebSocket real-time communication'
      ]
    },
    {
      title: 'Game Development',
      items: [
        'Unity Engine (C#)',
        'Godot Engine',
        '3D physics implementations',
        'Multiplayer networking'
      ]
    },
    {
      title: 'Algorithms & Data Structures',
      description: 'Proficient in algorithmic problem solving and optimization challenges.'
    },
    {
      title: 'Databases',
      items: [
        'SQL (MySQL, PostgreSQL)',
        'NoSQL (MongoDB)',
        'Database design & optimization',
        'ORM systems'
      ]
    },
    {
      title: 'Software Testing',
      description: 'Expertise in blackbox testing and system testing for complex software systems.'
    },
    {
      title: 'Tools',
      items: [
        'Linux system administration',
        'Bash scripting',
        'Git version control',
        'CI/CD pipelines',
        'Docker containerization'
      ]
    }
  ];

  return (
    <Section title="Skills">
      <div className="skills-grid">
        {skillsData.map((category) => (
          <div key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            {category.description && <p className="skill-description">{category.description}</p>}
            {category.items && (
              <ul className="skill-items">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};


/*const ProjectCard = ({ title, description, links }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-links">
      {links.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  </div>
);*/

const Projects = () => {
  const projectCategories = [
    {
      title: 'Personal Projects',
      projects: [
        {
          title: 'Edutube (YouTube Clone)',
          description: 'Full-stack educational content platform using MERN stack with TypeScript',
          techStack: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express'],
          links: [
            { label: 'Frontend Code', url: 'https://github.com/BasharHamade12/edutube-frontend' },
            { label: 'Server Code', url: 'https://github.com/BasharHamade12/Edutube_Server' },
            { label: 'Live Site', url: 'https://edutube2.netlify.app' }
          ]
        },
        {
          title: 'WhatsApp Clone',
          description: 'Real-time chat application with message synchronization',
          techStack: ['React', 'Node.js', 'MySQL', 'Socket.IO', 'JWT'],
          links: [
            { label: 'Client Code', url: 'https://github.com/BasharHamade12/chat_client' },
            { label: 'Server Code', url: 'https://github.com/BasharHamade12/Whatsapp_Clone_Server' }
          ]
        },
        {
          title: 'Movie Ranking',
          description: 'Web application for sharing movie reviews and ratings',
          techStack: ['React', 'Firebase', 'TMDB API'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/movies-project' }
          ]
        },
        {
          title: '3D Puzzle Platformer',
          description: 'Physics-based puzzle game developed with Unity',
          techStack: ['Unity', 'C#', '3D Physics'],
          links: [
            { label: 'APK Download', url: 'https://drive.google.com/drive/folders/1XwMhcqbi4k59xORfrgEFWC-7ia1I2GRP' }
          ]
        }
      ]
    },
    {
      title: 'University Projects',
      projects: [
        {
          title: 'IBAN Calculator (MIPS Assembly)',
          description: 'Assembly program for calculating and validating IBAN numbers',
          techStack: ['MIPS Assembly', 'Low-level Programming'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/IBAN_Calculator_MIPS' }
          ]
        },
        {
          title: 'Image Editor (C)',
          description: 'Terminal-based image processing application',
          techStack: ['C', 'Image Processing', 'BMP Format'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/Image_Editor_C' }
          ]
        },
        {
          title: 'SAT Solver (C)',
          description: 'Boolean satisfiability problem solver using recursive algorithms',
          techStack: ['C', 'Algorithms', 'NP-Complete Problems'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/SAT_Solver_C' }
          ]
        },
        {
          title: 'Ultimate Tic-Tac-Toe (Java)',
          description: 'Advanced version of classic game with AI opponent',
          techStack: ['Java', 'Swing GUI', 'Game AI'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/Ultimate_Tic_Tac_Toe_Java' }
          ]
        },
        {
          title: 'Ray Tracer (Java)',
          description: '3D rendering engine implementing ray tracing algorithms',
          techStack: ['Java', 'Computer Graphics', '3D Math'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/RayTracer_Java' }
          ]
        },
        {
          title: 'Lexer for Compiler (Java)',
          description: 'Lexical analyzer component for a custom compiler',
          techStack: ['Java', 'Compiler Design', 'Finite Automata'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/Compiler_Java' }
          ]
        },
        {
          title: 'Pincerovirus (Rust)',
          description: 'Virus spread simulation with statistical modeling',
          techStack: ['Rust', 'Simulation', 'Statistical Analysis'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/Pincerovirus_Simulation' }
          ]
        },
        {
          title: 'Dictionary Project (C)',
          description: 'High-performance dictionary with synonym lookup',
          techStack: ['C', 'Data Structures', 'File Handling'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/I2206-DICTIONARY-PROJECT' }
          ]
        }
      ]
    },
    {
      title: 'Ongoing Projects',
      projects: [
        {
          title: 'CalcuLean',
          description: 'Formalization of Calculus of Communicating Systems (CCS) in Lean',
          techStack: ['Lean4', 'Formal Methods', 'Concurrency Theory'],
          links: [
            { label: 'Project Code', url: 'https://github.com/Calculean/LeanCCS' }
          ]
        },
        {
          title: 'Interactive Babysitter Device',
          description: 'Raspberry Pi monitoring system with React Native app',
          techStack: ['React Native', 'Raspberry Pi', 'IoT'],
          links: [
            { label: 'Project Code', url: 'https://github.com/BasharHamade12/eBabySitter_IS' }
          ]
        }
      ]
    }
  ];

  return (
    <Section title="Projects">
      {projectCategories.map((category) => (
        <div key={category.title} className="project-category">
          <h3 className="category-title">{category.title}</h3>
          <div className="projects-grid">
            {category.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                links={project.links}
              />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

const ProjectCard = ({ title, description, techStack, links }) => (
  <div className="project-card">
    <h4>{title}</h4>
    <p className="project-description">{description}</p>
    <div className="tech-stack">
      {techStack.map((tech) => (
        <span key={tech} className="tech-tag">{tech}</span>
      ))}
    </div>
    <div className="project-links">
      {links.map((link) => ( 
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        > 
          {link.label.includes('Code') ? <FaGithub /> : <FaExternalLinkAlt />}
          <span className="link-text">{link.label}</span>
        </a>
      ))}
    </div>
  </div>
);

const Experience = () => (
  <Section title="Work Experience">
    <div className="experience-entry">
      <h3>Research Assistant at DFKI (1 year)</h3>
      <ul>
        <li>Implemented deep learning and neural networks for autonomous driving simulation projects.</li>
        <li>Wrote Python scripts for instance segmentation.</li>
        <li>Developed a real-time TCP socket connection between Unity and TensorFlow.</li>
        <li>Upgraded TensorFlow repos and integrated real-time socket connections.</li>
      </ul> 

      <h3>Software Developer & IT at Kalku GmbH (July 2024 - October 2024) </h3>
      <ul>
        <li>Calendly & Google Services Integrations</li>
        <li>Worked on Developing a Calendly-Clone app using MERN Stack</li>
        <li>General Help and Support in IT issues and Adminstration</li>
        <li>Automation for different tasks</li>
      </ul> 
      <h3>Tutor at UdS for the courses "Mathematics for Computer Scientists I & II" ( October 2024 - Ongoing) </h3>
    </div>
  </Section>
);

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Section title="Objective">
          <p className="objective">
            Passionate software developer seeking to develop technical skills in various fields
            of computer science and gain hands-on experience in real-world projects.
          </p>
        </Section>
        <Education />
        <Skills />
        <Projects />
        <Experience />
        {/* Add Languages and Personal Details sections similarly */}
      </main>
    </div>
  );
}