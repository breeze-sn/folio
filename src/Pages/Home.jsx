import Navbar from "../Components/global/Navbar"
import styles from "./Home.module.css"
import ProjectCard from "../Components/ProjectCard"
import { QUICKAIR } from "../Images"

function Home() {
    const projects = [
        {
            name: "folio",
            subtitle: "Web Design",
            image: null
        },
        {
            name: "Quick Air",
            subtitle: "UI/UX",
            image: QUICKAIR
        },
        
    ]
    return (
        <>
            {/* <Navbar/> */}
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
                                <ProjectCard project={project} index={1}></ProjectCard>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home