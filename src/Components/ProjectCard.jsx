import React, { useState } from 'react'
import styles from "./ProjectCard.module.css"
import { useDispatch } from 'react-redux';
import { CHANGE_PAGE } from '../store/types';

function ProjectCard({classname, style, project, index}) {
    const dispatch = useDispatch();
    const [hover,setHovering] = useState(false);

    const changepage = (projectIndex)=>{
        dispatch({type: CHANGE_PAGE,payload: {url: `/project/${projectIndex}`,mode: true}});
    }
    return (
        <>
            <div className={`${styles.maincontainer} ${classname} ${hover ? styles.hover : null}`} style={style} onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}} onClick={()=>{changepage(index-1)}}>
                <b></b>
                <span>{index < 10 ? 0:null}{index}.</span>
                <section>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </section>
                <i>&rarr;</i>
                {/* <img src={project.image} alt="Error" /> */}
            </div>
        </>
    )
}

export default ProjectCard
