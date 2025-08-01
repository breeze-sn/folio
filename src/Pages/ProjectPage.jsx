import React from 'react'
import styles from "./project.module.css"
import { useParams } from 'react-router-dom';
import projects from "../store/projects.json" with { type: 'json' };
import { CHANGE_PAGE } from '../store/types';
import { useDispatch } from 'react-redux';

function ProjectPage() {
    const dispatch = useDispatch()
    let { index } = useParams()
    index = Number(index)
    const project = projects[index]
    const nextProject = (index + 1) === projects.length ? null : projects[index+1]
    console.log("nextProject : ",nextProject)
    const changepage = (projectIndex)=>{
        dispatch({type: CHANGE_PAGE,payload: {url: `/project/${projectIndex}`,mode: true}});
    }

    return (
        <>
            <div className={styles.project}>
                <div className={styles.header}>
                    <h1>{project.name}</h1>
                    <span>{project.description}</span>
                </div>
                <div className={styles.body}>
                    <div className={styles.about}>
                        <h1>About the Project</h1>
                        <p>{project.about}</p>
                    </div>
                    <div className={styles.tools}>
                        <span>Tools</span>
                        <div>
                            {
                                project.skills.map((skill,index)=>{
                                    return(<p>{skill}</p>)
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.knowmore} onClick={()=>{window.open(project.link, '_blank');}}>
                        Know More &rarr;
                    </div>
                    {
                        nextProject && 
                        <div className={styles.next}>
                            <p>Next Project</p>
                            <h1>{nextProject.name}</h1>
                            <span className={styles.knowmore} onClick={()=>{changepage(index+1)}}>Know More &rarr;</span>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectPage
