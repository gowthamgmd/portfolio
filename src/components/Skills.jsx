import React from 'react';
import skillsData from '../data/skills.json';
import { Cpu, Globe, Database, Layers, FolderOpen } from 'lucide-react';

const Skills = () => {
    // Helper to get fallback icon for concepts that don't have a Devicon
    const getFallbackIcon = (name) => {
        if (name.includes('API')) return <Globe size={18} />;
        if (name.includes('System')) return <Layers size={18} />;
        if (name.includes('Data')) return <Database size={18} />;
        if (name.includes('OOP') || name.includes('Algorithms')) return <Cpu size={18} />; // Cpu icon for algo
        return <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--border-color)' }}></div>;
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <div style={styles.headerBox}>
                    <FolderOpen color="var(--accent-red)" />
                    <h2 style={styles.heading}>EQUIPMENT & ABILITIES</h2>
                </div>

                <div style={styles.grid}>
                    {skillsData.map((category, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.cardHeader}>
                                <div style={styles.redDot}></div>
                                <h3 style={styles.categoryTitle}>{category.category}</h3>
                            </div>
                            <ul style={styles.list}>
                                {category.items.map((item, i) => (
                                    <li key={i} className="text-mono" style={styles.item}>
                                        <div style={styles.iconWrapper}>
                                            {item.icon ? (
                                                <i className={item.icon} style={styles.devicon}></i>
                                            ) : (
                                                <span style={styles.fallbackIcon}>{getFallbackIcon(item.name)}</span>
                                            )}
                                        </div>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
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
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px',
    },
    card: {
        backgroundColor: '#000',
        border: '1px solid var(--border-color)',
        borderLeft: '4px solid var(--accent-red)',
        padding: '24px',
        position: 'relative',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
        borderBottom: '1px dashed var(--text-muted)',
        paddingBottom: '12px',
    },
    redDot: {
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--accent-red)',
        borderRadius: '50%',
        boxShadow: '0 0 5px var(--accent-red)',
    },
    categoryTitle: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        letterSpacing: '2px',
    },
    list: {
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
    },
    item: {
        fontSize: '1.1rem',
        color: 'var(--text-primary)',
        padding: '8px 12px',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        width: '100%', // Full width list items in the file
        transition: 'all 0.2s',
        cursor: 'default',
        '&:hover': {
            borderColor: 'var(--accent-secondary)',
            color: 'var(--accent-secondary)',
            backgroundColor: 'rgba(115, 194, 251, 0.05)',
        }
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '24px',
        height: '24px',
    },
    devicon: {
        fontSize: '1.4rem',
    },
    fallbackIcon: {
        display: 'flex',
        color: 'var(--text-secondary)',
    }
};

export default Skills;
