import React, { useState } from 'react'
import styles from "./ProjectCard.module.css"

function ProjectCard({classname, style, project, index}) {
    const [hover,setHovering] = useState(false);
    return (
        <>
            <div className={`${styles.maincontainer} ${classname} ${hover ? styles.hover : null}`} style={style} onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}}>
                <b></b>
                <span>{index < 10 ? 0:null}{index}.</span>
                <section>
                    <h2>{project.name}</h2>
                    <p>{project.subtitle}</p>
                </section>
                <i>&rarr;</i>
                {/* <img src={project.image} alt="Error" /> */}
            </div>
        </>
    )
}

export default ProjectCard
