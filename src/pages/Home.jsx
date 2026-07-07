import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, Code2, Gamepad2, Database, Layout, Code, User } from 'lucide-react';
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
          <h1 style={styles.title}>Muhammad Raffay Asif</h1>
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
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Experience</span>
            <strong style={styles.detailValue}>Internship at SAFEX Solutions</strong>
            <span style={styles.detailSub}>Website Development</span>
            <a href="https://safexsolutions.com/" target="_blank" rel="noreferrer" style={{...styles.detailSub, color: 'var(--accent-secondary)', textDecoration: 'underline', marginTop: '4px'}}>
              safexsolutions.com
            </a>
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
  }
};

export default Home;
