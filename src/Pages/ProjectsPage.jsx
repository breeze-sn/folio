import React from 'react'
import styles from "./projects.module.css"
import ProjectCard from "../Components/ProjectCard"
import projects from '../store/projects.json' with { type: 'json' };
import { useSelector } from "react-redux";

function ProjectsPage() {
    const theme = useSelector((state) => state.themeReducer.mode)

    return (
        <div className={styles.mainbox} data-theme={theme}>
            <div className={styles.header}>
                <h1>Projects</h1>
            </div>
            <div className={styles.projects}>
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard key={index} project={project} index={index + 1}></ProjectCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsPage