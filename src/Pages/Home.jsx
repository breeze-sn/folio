import Navbar from "../Components/global/Navbar"
import styles from "./Home.module.css"
import ProjectCard from "../Components/ProjectCard"
import HomeFooter from "../Components/global/HomeFooter"

import projects from '../store/projects.json' with { type: 'json' };
import Expertise from '../store/Expertise.json' with { type: 'json' };
import { useSelector } from "react-redux";


import * as images from "../Images"

function Home() {
    const theme = useSelector((state) => state.themeReducer.mode)

    return (
        <>
            <Navbar />
            <div className={`${styles.mainbox}`} data-theme={theme}>
                <div className={`${styles.section} ${styles.dashboard}`}>
                    <h1>port<span>folio</span>.</h1>
                    <section>
                        <p></p>
                        <span>Game Experience Designer</span>
                    </section>
                </div>
                <div className={`${styles.section} ${styles.about}`}>
                    <div className={`${styles.left}`}>
                        <img src={images.PROFILE_VECTOR} alt="Error" style={theme === "dark" ? {filter: "revert"}:null}/>
                    </div>
                    <div className={styles.right}>
                        <section>
                            <div className={styles.aboutSection}>
                                <h3 className={styles.aboutTitle}>About</h3>
                                <h1 className={styles.name}>Simran Nagekar</h1>
                                <p className={styles.subtitle}>
                                    Design Generalist & Creative Technology Explorer.
                                </p>
                            </div>

                            {/* Expertise Section */}
                            <div className={styles.expertiseSection}>
                                <h3 className={styles.expertiseTitle}>Expertise</h3>
                                <div className={styles.grid}>
                                    {
                                        Expertise.map((item)=>{
                                            return(
                                                <div>
                                                    <h4 className={styles.expertiseHeading}>{item.name}</h4>
                                                    <p className={styles.expertiseText}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={`${styles.section} ${styles.projects}`}>
                    <div className={styles.header}>Projects</div>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard project={project} index={index + 1}></ProjectCard>
                            )
                        })
                    }
                </div>
                <HomeFooter />
            </div>
        </>
    )
}

export default Home