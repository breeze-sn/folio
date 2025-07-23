import Navbar from "../Components/global/Navbar"
import styles from "./Home.module.css"

function Home() {
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
            </div>
        </>
    )
}

export default Home