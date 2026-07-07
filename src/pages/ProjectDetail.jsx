import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect, useRef } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (videoRef.current && project?.video) {
      videoRef.current.playbackRate = project.videoSpeed || 1.0;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="section container" style={styles.notFound}>
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <article className="animate-fade-in">
      <div style={styles.heroWrapper}>
        {project.video ? (
          <video 
            ref={videoRef}
            src={project.video} 
            autoPlay 
            loop 
            muted 
            playsInline
            onCanPlay={(e) => { e.target.playbackRate = project.videoSpeed || 1.0; }}
            style={styles.heroVideoBg}
          />
        ) : (
          <div style={{...styles.heroBg, backgroundImage: `url(${project.image})`}}></div>
        )}
        <div className="container" style={styles.heroContent}>
          <Link to="/#projects" style={styles.backLink}>
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          <span style={styles.type}>{project.type}</span>
          <h1 style={styles.title}>{project.title}</h1>
          <div style={styles.tags}>
            {project.tags.map(tag => (
              <span key={tag} style={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container section contentGrid" style={styles.contentGrid}>
        <div style={styles.mainContent}>
          <div className="glass-panel" style={styles.panel}>
            <h2 style={styles.sectionTitle}>Overview</h2>
            <p style={styles.text} dangerouslySetInnerHTML={{ __html: project.details }}></p>
          </div>

          <div className="glass-panel delay-100" style={styles.panel}>
            <h2 style={styles.sectionTitle}>My Contributions</h2>
            <ul style={styles.list}>
              {project.contributions.map((contribution, idx) => (
                <li key={idx} style={styles.listItem}>
                  <CheckCircle size={20} color="var(--accent-color)" style={styles.listIcon} />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.extraImages && project.extraImages.length > 0 && (
            <div className="glass-panel delay-200" style={styles.panel}>
              <h2 style={styles.sectionTitle}>Gallery</h2>
              <div style={styles.galleryGrid}>
                {project.extraImages.map((img, idx) => (
                  <img key={idx} src={img} alt={`${project.title} screenshot ${idx + 1}`} style={styles.galleryImage} loading="lazy" />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside style={styles.sidebar}>
          <div className="glass-panel delay-200" style={styles.panel}>
            <h3 style={styles.sidebarTitle}>Project Links</h3>
            <div style={styles.linksWrapper}>
              {project.links.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`btn ${link.primary ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {link.text} <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};

const styles = {
  notFound: {
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroWrapper: {
    position: 'relative',
    paddingTop: '8rem',
    paddingBottom: '4rem',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden',
    borderBottom: '1px solid var(--glass-border)',
  },
  heroBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.15,
    filter: 'blur(8px)',
    zIndex: -1,
  },
  heroVideoBg: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '100vw',
    height: '100%',
    transform: 'translateX(-50%)',
    objectFit: 'cover',
    opacity: 0.4,
    zIndex: -1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
    fontWeight: 500,
    padding: '0.5rem 0',
  },
  type: {
    display: 'block',
    color: 'var(--accent-color)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  tag: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    border: '1px solid var(--glass-border)',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem',
    alignItems: 'start',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  panel: {
    padding: '2.5rem',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid var(--glass-border)',
    paddingBottom: '1rem',
  },
  text: {
    color: 'var(--text-secondary)',
    fontSize: '1.1rem',
    lineHeight: 1.8,
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    color: 'var(--text-secondary)',
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
  listIcon: {
    flexShrink: 0,
    marginTop: '0.2rem',
  },
  sidebar: {
    position: 'sticky',
    top: '6rem',
  },
  sidebarTitle: {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
  },
  linksWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  galleryImage: {
    width: '100%',
    borderRadius: '8px',
    border: '1px solid var(--glass-border)',
  }
};

// Add responsive styles directly in component or index.css
// For simplicity in React inline styles, simple grid fallbacks can be handled in global css
const responsiveStyles = `
  @media (max-width: 768px) {
    .contentGrid {
      grid-template-columns: 1fr !important;
    }
  }
`;

export default ProjectDetail;
