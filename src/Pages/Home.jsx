import Navbar from "../Components/global/Navbar"
import styles from "./Home.module.css"
import ProjectCard from "../Components/ProjectCard"
import HomeFooter from "../Components/global/HomeFooter"

import projects from '../store/projects.json' with { type: 'json' };
import { useSelector } from "react-redux";

function Home() {
    const theme = useSelector((state)=> state.themeReducer.mode)
    return (
        <>
            <Navbar/>
            <div className={`${styles.mainbox}`} data-theme={theme}>
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
}// need to add ellipse after folio, check figma 

export default Home