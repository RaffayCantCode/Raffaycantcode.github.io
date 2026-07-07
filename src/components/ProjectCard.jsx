import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`glass-panel reveal ${isVisible ? 'active' : ''} ${isEven ? 'project-card-row' : 'project-card-reverse'}`} 
      style={styles.card}
    >
      <div className="project-card-image" style={styles.imageContainer}>
        <img src={project.image} alt={project.title} style={styles.image} loading="lazy" />
      </div>
      <div className="project-card-content" style={styles.content}>
        <div>
          <span style={styles.type}>{project.type}</span>
          <h3 style={styles.title}>{project.title}</h3>
          <p style={styles.description}>{project.shortDescription}</p>
        </div>
        
        <div style={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>
        
        <Link to={`/project/${project.id}`} className="btn btn-outline" style={styles.link}>
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    overflow: 'hidden',
    minHeight: '400px',
    marginBottom: '4rem',
  },
  imageContainer: {
    flex: '1 1 50%',
    backgroundColor: '#0b0f19',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '2px solid var(--glass-border)',
    borderLeft: 'none',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.5s ease',
  },
  content: {
    flex: '1 1 50%',
    padding: '4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '2rem',
  },
  type: {
    display: 'inline-block',
    color: 'var(--accent-color)',
    fontSize: '0.9rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  },
  description: {
    color: 'var(--text-secondary)',
    fontSize: '1.2rem',
    lineHeight: 1.8,
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
    fontWeight: 500,
    color: 'var(--text-secondary)',
    border: '2px solid var(--glass-border)',
  },
  link: {
    alignSelf: 'flex-start',
  }
};

export default ProjectCard;
