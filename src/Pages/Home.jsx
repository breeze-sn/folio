import Navbar from "../Components/global/Navbar"
import styles from "./Home.module.css"
import ProjectCard from "../Components/ProjectCard"
import HomeFooter from "../Components/global/HomeFooter"
import SEO from "../Components/global/SEO"

import projects from '../store/projects.json' with { type: 'json' };
import Expertise from '../store/Expertise.json' with { type: 'json' };
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PAGE } from "../store/types";


import * as images from "../Images"

function Home() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.themeReducer.mode);

    const changepage = (path) => {
        dispatch({ type: CHANGE_PAGE, payload: { url: path, mode: true } });
    };

    return (
        <>
            <SEO 
                title="Folio'25 - Simran Nagekar"
                description="Portfolio of Simran Nagekar - Game Experience Designer, Design Generalist & Creative Technology Explorer. Explore innovative game design projects and interactive experiences."
                url="https://simrann.dev/"
            />
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
                        <img src={images.PROFILE_VECTOR} alt="Error" style={theme === "dark" ? {filter: "invert(1)"}:null}/>
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
                                                    <div className={styles.expertiseContent}>
                                                        <h4 className={styles.expertiseHeading}>{item.name}</h4>
                                                        <p className={styles.expertiseText}>
                                                            {item.description}
                                                        </p>
                                                    </div>
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
                        projects.slice(0, 2).map((project, index) => {
                            return (
                                <ProjectCard key={index} project={project} index={index + 1}></ProjectCard>
                            )
                        })
                    }
                    <div className={styles.viewAllContainer}>
                        <div className={styles.more}>THERE'S MORE</div>
                        <div onClick={() => changepage('/project')} className={styles.viewAllLink}>view all projects &rarr;</div>
                    </div>
                </div>
                <div className={styles.mobileFooterSection}>
                    <div className={styles.footerTitle}>Quick Links</div>
                    <div className={styles.footerLinks}>
                        <a onClick={() => changepage('/about')}>about</a>
                        <a onClick={() => changepage('/project')}>projects</a>
                        <a onClick={() => changepage('/contact')}>contact</a>
                    </div>
                </div>
                <HomeFooter />
            </div>
        </>
    )
}

export default Home