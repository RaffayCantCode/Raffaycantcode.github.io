import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        <Link to="/" style={styles.brand}>
          Raffay Asif
        </Link>
        <nav style={styles.nav}>
          {isHome ? (
            <>
              <a href="#projects" style={styles.link}>Projects</a>
              <a href="#skills" style={styles.link}>Skills</a>
              <a href="#contact" style={styles.link}>Contact</a>
            </>
          ) : (
            <Link to="/" style={styles.link}>Back to Home</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'rgba(11, 15, 25, 0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--glass-border)',
    padding: '1rem 0'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  brand: {
    fontFamily: 'Outfit, sans-serif',
    fontWeight: 700,
    fontSize: '1.5rem',
    color: 'var(--text-primary)',
  },
  nav: {
    display: 'flex',
    gap: '2rem'
  },
  link: {
    color: 'var(--text-secondary)',
    fontWeight: 500,
    fontSize: '0.95rem'
  }
};

export default Navbar;
