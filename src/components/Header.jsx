import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header style={styles.header}>
            <div className="container" style={styles.container}>
                <div style={styles.logo}>
                    <span style={{ color: 'var(--accent-red)', textShadow: '0 0 10px var(--accent-red)' }}>GOWTHAM</span>
                    <span style={{ color: 'var(--text-secondary)' }}>.G</span>
                </div>

                <nav className="nav-desktop" style={styles.navDesktop}>
                    <a href="#skills" style={styles.link}>ABILITIES</a>
                    <a href="#projects" style={styles.link}>CASE FILES</a>
                    <a href="#contact" style={styles.link}>CONTACT</a>
                </nav>

                <button
                    style={styles.mobileToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div style={styles.mobileMenu}>
                    <a href="#skills" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>ABILITIES</a>
                    <a href="#projects" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>CASE FILES</a>
                    <a href="#contact" style={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>CONTACT</a>
                </div>
            )}
        </header>
    );
};

const styles = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        backgroundColor: 'rgba(5, 5, 5, 0.9)',
        borderBottom: '1px solid var(--border-glow)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    logo: {
        fontFamily: 'var(--font-title)',
        fontWeight: 900,
        fontSize: '1.5rem',
        letterSpacing: '2px',
        color: 'var(--text-primary)',
    },
    navDesktop: {
        display: 'flex',
        gap: '2.5rem',
    },
    link: {
        color: 'var(--text-primary)',
        fontSize: '1.1rem',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '1px',
    },
    mobileToggle: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--accent-red)',
        display: 'none', // Managed by CSS media query ideally, but relying on flex logic behavior for now or verifying in review
    },
    mobileMenu: {
        position: 'absolute',
        top: '80px',
        left: 0,
        right: 0,
        backgroundColor: 'var(--bg-color)',
        borderBottom: '1px solid var(--border-color)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        borderTop: '1px solid var(--accent-red)',
    },
    mobileLink: {
        fontSize: '1.25rem',
        color: 'var(--text-primary)',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
    }
};

export default Header;
