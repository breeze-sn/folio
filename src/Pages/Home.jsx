import Navbar from "../Components/global/Navbar"
import styles from "./Home.module.css"
import ProjectCard from "../Components/ProjectCard"
import HomeFooter from "../Components/global/HomeFooter"

import projects from '../store/projects.json' with { type: 'json' };

function Home() {
    return (
        <>
            <Navbar/>
            <div className={`${styles.mainbox}`}>
                <div className={`${styles.section} ${styles.dashboard}`}>
                    <h1>port<span>folio</span>.</h1>
                    <section>
                        <p></p>
                        <span>Game Experience Designer</span>
                    </section>
                </div>
                <div className={`${styles.section} ${styles.projects}`}>
                    <div className={styles.header}>Projects</div>
                    {
                        projects.map((project,index)=>{
                            return(
                                <ProjectCard project={project} index={index + 1}></ProjectCard>
                            )
                        })
                    }
                </div>
                <HomeFooter/>
            </div>
        </>
    )
}

export default Home