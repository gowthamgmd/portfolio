import React from 'react';
import { Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section" style={styles.heroSection}>
            <div className="container" style={styles.container}>
                <div style={styles.content}>
                    <div className="text-mono" style={styles.badge}>
                        <Terminal size={14} style={{ marginRight: '8px', color: 'var(--accent-red)' }} />
                        <span className="flicker-slow" style={{ color: 'var(--accent-secondary)' }}>
                            INCOMING TRANSMISSION...
                        </span>
                    </div>

                    <h1 style={styles.title}>
                        <span style={styles.strokeText}>WELCOME TO THE</span> <br />
                        <span style={styles.glowText}>UPSIDE DOWN</span>
                        <div style={styles.subtext}>OF BACKEND ENGINEERING</div>
                    </h1>

                    <p style={styles.subtitle}>
                        I am <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>Gowtham G</span>.
                        Navigating the void of distributed systems and bringing logic to chaos.
                    </p>

                    <div style={styles.actions}>
                        <a href="#projects" style={styles.primaryBtn}>
                            OPEN FILES
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={styles.secondaryBtn}>
                            ACCESS PROTOCOL
                        </a>
                        <a href="#contact" style={styles.secondaryBtn}>
                            INITIATE CONTACT
                        </a>
                    </div>
                </div>
            </div>

            {/* Ambient Background Particles (Simple CSS circles) */}
            <div style={styles.particleOne}></div>
            <div style={styles.particleTwo}></div>
        </section>
    );
};

const styles = {
    heroSection: {
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center align for cinematic feel
        textAlign: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        width: '100%',
        zIndex: 2,
    },
    content: {
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        marginBottom: '32px',
        fontSize: '1rem',
        letterSpacing: '2px',
    },
    title: {
        fontSize: '4.5rem',
        marginBottom: '24px',
        letterSpacing: '-2px',
        lineHeight: 1,
        position: 'relative',
    },
    strokeText: {
        fontSize: '2rem',
        letterSpacing: '5px',
        color: 'transparent',
        WebkitTextStroke: '1px var(--text-primary)',
        opacity: 0.7,
    },
    glowText: {
        display: 'block',
        color: 'var(--accent-red)',
        textShadow: '0 0 10px var(--accent-red), 0 0 20px var(--accent-red), 0 0 40px var(--accent-red)',
        marginTop: '10px',
    },
    subtext: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '4px',
        marginTop: '16px',
        borderTop: '1px solid var(--accent-red)',
        paddingTop: '16px',
        width: '100%',
    },
    subtitle: {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        marginBottom: '48px',
        maxWidth: '600px',
        lineHeight: 1.6,
        fontFamily: 'var(--font-mono)',
    },
    actions: {
        display: 'flex',
        gap: '24px',
    },
    primaryBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 32px',
        backgroundColor: 'rgba(229, 9, 20, 0.1)',
        color: 'var(--accent-red)',
        border: '1px solid var(--accent-red)',
        borderRadius: '2px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        boxShadow: '0 0 15px rgba(229, 9, 20, 0.4)',
        transition: 'all 0.3s ease',
    },
    secondaryBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 32px',
        backgroundColor: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--text-muted)',
        borderRadius: '2px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
    },
    // Decorative "particles"
    particleOne: {
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(229,9,20,0.1) 0%, rgba(0,0,0,0) 70%)',
        top: '20%',
        left: '20%',
        zIndex: 1,
        animation: 'flicker 10s infinite',
    },
    particleTwo: {
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(115,194,251,0.05) 0%, rgba(0,0,0,0) 70%)',
        bottom: '10%',
        right: '10%',
        zIndex: 1,
    }
};

export default Hero;
