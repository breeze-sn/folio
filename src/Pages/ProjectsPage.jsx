import React, { useEffect, useRef, useState } from 'react'
import styles from "./projects.module.css"
import ProjectCard from "../Components/ProjectCard"
import projects from '../store/projects.json' with { type: 'json' };
import { useSelector } from "react-redux";
import SEO from '../Components/global/SEO';

function ProjectsPage() {
    const theme = useSelector((state) => state.themeReducer.mode)
    const [visibleProjects, setVisibleProjects] = useState([0, 1]) // Show first 2 projects initially
    const projectRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index)
                        setVisibleProjects((prev) => {
                            if (!prev.includes(index)) {
                                return [...prev, index]
                            }
                            return prev
                        })
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        )

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <SEO 
                title="Projects - Simran Nagekar"
                description="Explore game design and interactive experience projects by Simran Nagekar. View detailed case studies and creative work."
                url="https://simrann.dev/project"
            />
            <div className={styles.mainbox} data-theme={theme}>
            <div className={styles.header}>
                <h1>Projects</h1>
            </div>
            <div className={styles.projects}>
                {
                    projects.map((project, index) => {
                        return (
                            <div
                                key={index}
                                ref={(el) => (projectRefs.current[index] = el)}
                                data-index={index}
                                className={`${styles.projectWrapper} ${visibleProjects.includes(index) ? styles.visible : ''}`}
                            >
                                <ProjectCard project={project} index={index + 1}></ProjectCard>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default ProjectsPage