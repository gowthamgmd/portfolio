import React from 'react';
import { Mail, Linkedin, Github, Radio, Code, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={styles.footer}>
            <div className="container" style={styles.container}>
                <div style={styles.top}>
                    <div style={{ marginBottom: '24px' }}>
                        <Radio size={48} color="var(--accent-red)" className="flicker-slow" />
                    </div>
                    <h2 style={styles.title}>END OF LINE.</h2>
                    <p style={styles.subtitle}>Ready to join the party? Send a signal.</p>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href="mailto:gowthamganesan2011@gmail.com" style={styles.emailBtn}>
                            <Mail size={20} style={{ marginRight: '12px' }} />
                            gowthamganesan2011@gmail.com
                        </a>
                        <a href="tel:8825978910" style={styles.emailBtn}>
                            <Phone size={20} style={{ marginRight: '12px' }} />
                            8825978910
                        </a>
                    </div>
                </div>

                <div style={styles.bottom}>
                    <p style={styles.copyright}>
                        <span style={{ color: 'var(--accent-red)' }}>© 1986</span> Gowtham G. Hawkin's Lab.
                    </p>
                    <div style={styles.socials}>
                        <a href="https://github.com/gowthamgmd" target="_blank" rel="noopener noreferrer" style={styles.socialLink}><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/gowthamganesanin/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}><Linkedin size={20} /></a>
                        <a href="https://leetcode.com/u/gowthamcode148/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}><Code size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#000',
        borderTop: '2px solid var(--accent-red)',
        padding: '80px 0 40px',
        position: 'relative',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    top: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '80px',
        textAlign: 'center',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '16px',
        color: 'var(--text-primary)',
        textShadow: '0 0 10px var(--accent-glow)',
    },
    subtitle: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-secondary)',
        fontSize: '1.25rem',
        marginBottom: '32px',
        letterSpacing: '1px',
    },
    emailBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '16px 32px',
        backgroundColor: 'var(--accent-red)',
        color: '#fff',
        borderRadius: '2px', // Retro sharp corners
        fontWeight: 700,
        fontSize: '1.2rem',
        boxShadow: '0 0 15px var(--accent-glow)',
        fontFamily: 'var(--font-mono)',
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '40px',
        borderTop: '1px solid var(--border-color)',
    },
    copyright: {
        color: 'var(--text-muted)',
        fontSize: '1rem',
        fontFamily: 'var(--font-mono)',
    },
    socials: {
        display: 'flex',
        gap: '24px',
    },
    socialLink: {
        color: 'var(--text-secondary)',
        transition: 'color 0.2s',
        '&:hover': {
            color: 'var(--accent-red)',
        }
    },
};

export default Footer;
