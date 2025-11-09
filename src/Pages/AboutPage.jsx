import styles from "./contact.module.css"
import HomeStyles from "./Home.module.css"
import { useSelector } from 'react-redux'
import * as images from "../Images/index"
import Expertise from '../store/Expertise.json' with { type: 'json' };

function AboutPage() {
    const theme = useSelector((state) => state.themeReducer.mode);
    return (
        <>
            <div className={HomeStyles.mainbox} data-theme={theme}>
                <div className={`${HomeStyles.section} ${HomeStyles.about}`}>
                    <div className={`${HomeStyles.left}`}>
                        <img src={images.PROFILE_VECTOR} alt="Error" style={theme === "dark" ? { filter: "revert" } : null} />
                    </div>
                    <div className={HomeStyles.right}>
                        <section>
                            <div className={HomeStyles.aboutSection}>
                                <h3 className={HomeStyles.aboutTitle}>About</h3>
                                <h1 className={HomeStyles.name}>Simran Nagekar</h1>
                                <p className={HomeStyles.subtitle}>
                                    Game Enthusiast & Creative Technology Explorer.
                                </p>
                            </div>

                            <div className={HomeStyles.expertiseSection}>
                                <h3 className={HomeStyles.expertiseTitle}>Expertise</h3>
                                <div className={HomeStyles.grid}>
                                    {
                                        Expertise.map((item) => {
                                            return (
                                                <div>
                                                    <h4 className={HomeStyles.expertiseHeading}>{item.name}</h4>
                                                    <p className={HomeStyles.expertiseText}>
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
            </div>
        </>
    )
}

export default AboutPage
