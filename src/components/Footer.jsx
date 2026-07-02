import { Code, User, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" style={styles.footer} className="section container">
      <div className="glass-panel animate-fade-in" style={styles.content}>
        <h2 style={styles.title}>Let's build something useful.</h2>
        <p style={styles.description}>
          I am open to internship, junior developer, game development, and full stack web opportunities.
        </p>
        
        <div style={styles.links}>
          <a href="mailto:asifraffy@gmail.com" style={styles.link}>
            <Mail size={20} />
            asifraffy@gmail.com
          </a>
          <a href="https://github.com/RaffayCantCode" target="_blank" rel="noreferrer" style={styles.link}>
            <Code size={20} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/muhammad-raffay-asif-3b6b68330/" target="_blank" rel="noreferrer" style={styles.link}>
            <User size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    paddingTop: '2rem',
    paddingBottom: '4rem',
  },
  content: {
    padding: '4rem 2rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
  },
  description: {
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    fontSize: '1.1rem',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-primary)',
    fontWeight: 500,
    padding: '0.75rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
  }
};

export default Footer;
