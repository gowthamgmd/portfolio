import React from 'react';
import { Github, Server, FileText } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div style={styles.headerBox}>
                    <FileText color="var(--accent-red)" />
                    <h2 style={styles.heading}>HAWKINS LAB CASE FILES</h2>
                </div>

                <div style={styles.list}>
                    {projectsData.map((project) => (
                        <article key={project.id} style={styles.projectCard}>
                            <div style={styles.cardBorder}></div>
                            <div style={styles.header}>
                                <div style={styles.caseId}>CASE #{project.id * 1983}</div>
                                <div style={styles.statusBadge}>STATUS: <span style={{ color: 'var(--accent-red)' }}>CLASSIFIED</span></div>
                            </div>

                            <div style={styles.contentWrapper}>
                                <h3 style={styles.title}>{project.title}</h3>
                                <p style={styles.shortDesc}>{project.shortDescription}</p>

                                <div style={styles.grid}>
                                    <div style={styles.section}>
                                        <h4 style={styles.label}>ANOMALY (PROBLEM):</h4>
                                        <p style={styles.text}>{project.problem}</p>
                                    </div>

                                    <div style={styles.section}>
                                        <h4 style={styles.label}>CONTAINMENT PROTOCOL (APPROACH):</h4>
                                        <p style={styles.text}>{project.approach}</p>
                                    </div>
                                </div>
                            </div>

                            <div style={styles.footer}>
                                <div style={styles.techStack}>
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-mono" style={styles.tag}>
                                            [{tech}]
                                        </span>
                                    ))}
                                </div>
                                <div style={styles.links}>
                                    <a href="#" style={styles.linkIcon} title="Access Data"><Github size={20} /> Access Source</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    headerBox: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '48px',
        borderBottom: '2px solid var(--accent-red)',
        paddingBottom: '16px',
    },
    heading: {
        fontSize: '2rem',
        letterSpacing: '2px',
        color: 'var(--text-primary)',
        textShadow: '0 0 10px rgba(229, 9, 20, 0.5)',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
    },
    projectCard: {
        backgroundColor: '#0a0a0a',
        border: '1px solid var(--border-color)',
        position: 'relative',
        padding: '32px',
    },
    cardBorder: {
        position: 'absolute',
        top: '4px',
        left: '4px',
        right: '4px',
        bottom: '4px',
        border: '1px solid var(--border-glow)',
        pointerEvents: 'none',
        zIndex: 0,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '24px',
        borderBottom: '1px dashed var(--border-color)',
        paddingBottom: '16px',
        fontFamily: 'var(--font-mono)',
        position: 'relative',
        zIndex: 1,
    },
    caseId: {
        color: 'var(--accent-secondary)',
        fontSize: '1.1rem',
        letterSpacing: '2px',
    },
    statusBadge: {
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        letterSpacing: '1px',
    },
    contentWrapper: {
        position: 'relative',
        zIndex: 1,
        marginBottom: '32px',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '8px',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-title)',
    },
    shortDesc: {
        color: 'var(--text-secondary)',
        marginBottom: '32px',
        fontFamily: 'var(--font-mono)',
        fontSize: '1.2rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
        },
    },
    section: {
        marginBottom: '0',
    },
    label: {
        fontSize: '1rem',
        color: 'var(--accent-red)',
        marginBottom: '12px',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '1px',
    },
    text: {
        fontSize: '1rem',
        color: 'var(--text-primary)',
        lineHeight: 1.7,
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '24px',
        borderTop: '1px dashed var(--border-color)',
        position: 'relative',
        zIndex: 1,
    },
    techStack: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
    },
    tag: {
        fontSize: '0.9rem',
        color: 'var(--accent-secondary)',
    },
    links: {
        display: 'flex',
        gap: '16px',
    },
    linkIcon: {
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.9rem',
        fontFamily: 'var(--font-mono)',
        '&:hover': {
            color: 'var(--accent-red)',
        },
    },
};

export default Projects;
