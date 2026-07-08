import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Code2, Gamepad2, Database, Layout, Code, User, ExternalLink, ChevronRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#projects') {
      const el = document.getElementById('projects');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <>
      <section className="section container hero" style={styles.hero}>
        <div className="animate-fade-in">
          <p style={styles.eyebrow} className="text-gradient-accent">Computer Games Development Student</p>
          <h1 className="hero-title" style={styles.title}>Muhammad Raffay Asif</h1>
          <p style={styles.lead}>
            Unreal Engine developer and full stack web developer building games,
            web apps, database-backed platforms, and practical AI tools.
          </p>
          <div style={styles.actions}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={20} />
            </a>
            <a href="https://github.com/RaffayCantCode" target="_blank" rel="noreferrer" className="btn btn-github">
              <Code size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammad-raffay-asif-3b6b68330/" target="_blank" rel="noreferrer" className="btn btn-linkedin">
              <User size={20} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="glass-panel delay-200 animate-fade-in" style={styles.profileCard}>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Location</span>
            <strong style={styles.detailValue}>Rawalpindi, Punjab, Pakistan</strong>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Education</span>
            <strong style={styles.detailValue}>Bachelor's in Computer Games Development</strong>
            <span style={styles.detailSub}>Air University, Islamabad</span>
          </div>
        </div>
      </section>

      <section className="section container" id="experience">
        <div style={styles.sectionHeader}>
          <p style={styles.kicker}>Professional</p>
          <h2 style={styles.sectionTitle}>Work Experience</h2>
        </div>
        
        <div className="timeline-container" style={styles.timelineContainer}>
          <div className="timeline-line" style={styles.timelineLine}></div>
          <div className="timeline-item" style={styles.timelineItem}>
            <div className="timeline-dot" style={styles.timelineDot}></div>
            <div className="glass-panel timeline-content" style={styles.timelineContent}>
              <div style={styles.timelineHeader}>
                <div>
                  <h3 style={styles.timelineRole}>Website Development (Intern)</h3>
              <a href="https://safexsolutions.com/" target="_blank" rel="noreferrer" style={styles.timelineCompany}>
                SafeX Solutions <ExternalLink size={16} style={{ marginLeft: '6px' }} />
              </a>
            </div>
            <div style={styles.timelineDate}>
              2026 — Present
            </div>
          </div>
              
              <p style={styles.timelineDesc}>
                I am currently working on website development for a forward-thinking IT startup. My role involves building new web projects from scratch and enhancing existing websites.
              </p>

              <ul style={styles.timelineList}>
                <li style={styles.timelineListItem}>
                  <span style={styles.bulletHighlight}></span>
                  Developing and launching responsive websites from scratch to meet various client needs.
                </li>
                <li style={styles.timelineListItem}>
                  <span style={styles.bulletHighlight}></span>
                  Maintaining and updating existing websites by integrating new features and improving designs.
                </li>
                <li style={styles.timelineListItem}>
                  <span style={styles.bulletHighlight}></span>
                  Troubleshooting technical issues and optimizing web pages for better performance and user experience.
                </li>
                <li style={styles.timelineListItem}>
                  <span style={styles.bulletHighlight}></span>
                  Collaborating with the team to connect frontend layouts with functional back-end APIs.
                </li>
              </ul>

              <div style={styles.timelineTags}>
                {['React', 'Node.js', 'JavaScript', 'Git', 'API Integration'].map(tag => (
                  <span key={tag} style={styles.timelineTag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="about">
        <div className="glass-panel" style={styles.aboutCard}>
          <p style={styles.kicker}>About</p>
          <h2 style={styles.sectionTitle}>I build interactive software with practical user-focused details.</h2>
          <p style={styles.aboutText}>
            I am a Computer Games Development student with hands-on experience across game
            development, web development, and database systems. Currently, I am doing an internship at 
            <a href="https://safexsolutions.com/" target="_blank" rel="noreferrer" className="text-gradient-accent" style={{fontWeight: 'bold'}}> SAFEX Solutions </a> focusing on website development.
            My work combines C++, JavaScript, Unreal Engine, SQL, and modern deployment tools to create projects
            that are usable, polished, and easy to understand.
          </p>
        </div>
      </section>

      <section className="section container" id="projects">
        <div style={styles.sectionHeader}>
          <p style={styles.kicker}>Selected Work</p>
          <h2 style={styles.sectionTitle}>Projects</h2>
        </div>
        <div style={styles.projectList}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="section container" id="skills">
        <div style={styles.sectionHeader}>
          <p style={styles.kicker}>Toolkit</p>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
        </div>
        <div style={styles.skillsGrid}>
          <div className="glass-panel" style={styles.skillCard}>
            <Code2 size={32} color="var(--accent-color)" style={styles.skillIcon} />
            <h3 style={styles.skillTitle}>Languages</h3>
            <p style={styles.skillText}>C++, JavaScript, Python, SQL, HTML, CSS</p>
          </div>
          <div className="glass-panel" style={styles.skillCard}>
            <Gamepad2 size={32} color="var(--accent-color)" style={styles.skillIcon} />
            <h3 style={styles.skillTitle}>Game Development</h3>
            <p style={styles.skillText}>Unreal Engine 5, OpenGL C++, UI design, learning Blender</p>
          </div>
          <div className="glass-panel" style={styles.skillCard}>
            <Database size={32} color="var(--accent-color)" style={styles.skillIcon} />
            <h3 style={styles.skillTitle}>Web & Databases</h3>
            <p style={styles.skillText}>Frontend development, responsive design, React, API integration, MySQL</p>
          </div>
          <div className="glass-panel" style={styles.skillCard}>
            <Layout size={32} color="var(--accent-color)" style={styles.skillIcon} />
            <h3 style={styles.skillTitle}>Tools & Practices</h3>
            <p style={styles.skillText}>GitHub, Vercel, Netlify, Object Oriented Programming, Data Structures and Algorithms</p>
          </div>
        </div>
      </section>
    </>
  );
};

const styles = {
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    minHeight: '90vh',
    paddingTop: '8rem',
  },
  eyebrow: {
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '4rem',
    marginBottom: '1.5rem',
  },
  lead: {
    fontSize: '1.25rem',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
    maxWidth: '540px',
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  profileCard: {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  detailLabel: {
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  detailValue: {
    fontSize: '1.1rem',
    color: 'var(--text-primary)',
  },
  detailSub: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
  },
  aboutCard: {
    padding: '4rem',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  },
  kicker: {
    color: 'var(--accent-color)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '0.5rem',
  },
  sectionHeader: {
    marginBottom: '4rem',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.5rem',
  },
  aboutText: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    marginTop: '2rem',
    lineHeight: 1.8,
  },
  projectList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  skillCard: {
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'transform 0.3s ease',
  },
  skillIcon: {
    marginBottom: '0.5rem',
  },
  skillTitle: {
    fontSize: '1.25rem',
  },
  skillText: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
  },
  timelineContainer: {
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
    paddingLeft: '2.5rem',
  },
  timelineLine: {
    position: 'absolute',
    left: '0',
    top: '2rem',
    bottom: '0',
    width: '4px',
    background: 'var(--glass-border)',
    borderRadius: '4px',
  },
  timelineItem: {
    position: 'relative',
    paddingBottom: '2rem',
  },
  timelineDot: {
    position: 'absolute',
    left: '-2.5rem',
    top: '3rem',
    width: '22px',
    height: '22px',
    background: 'var(--bg-color)',
    border: '4px solid var(--accent-color)',
    borderRadius: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    boxShadow: '0 0 15px var(--accent-glow)',
  },
  timelineContent: {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  timelineHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '1.5rem',
    borderBottom: '2px dashed var(--glass-border)',
    paddingBottom: '1.5rem',
  },
  timelineRole: {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
  },
  timelineCompany: {
    fontSize: '1.15rem',
    color: 'var(--accent-secondary)',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
  },
  timelineDate: {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: '#10b981',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '2px solid rgba(16, 185, 129, 0.3)',
    padding: '0.5rem 1.25rem',
    borderRadius: '30px',
    letterSpacing: '1px',
    boxShadow: '4px 4px 0px rgba(0,0,0,0.5)',
  },
  timelineDesc: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.8,
  },
  timelineList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  timelineListItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    color: 'var(--text-secondary)',
    fontSize: '1.05rem',
    lineHeight: 1.6,
  },
  bulletHighlight: {
    marginTop: '0.5rem',
    width: '10px',
    height: '10px',
    background: 'var(--accent-secondary)',
    borderRadius: '50%',
    flexShrink: 0,
    boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
  },
  timelineTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '1rem',
  },
  timelineTag: {
    background: 'var(--bg-color)',
    color: 'var(--text-primary)',
    padding: '0.6rem 1.25rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 600,
    border: '2px solid var(--accent-color)',
    boxShadow: '4px 4px 0px rgba(0,0,0,0.5)',
  }
};

export default Home;
