import styles from "./about.module.css"
import { useSelector } from 'react-redux'
import * as images from "../Images/index"
import HomeFooter from "../Components/global/HomeFooter"

function AboutPage() {
    const theme = useSelector((state) => state.themeReducer.mode);

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://linkedin.com/in/simransn', icon: images.LINKEDIN },
        { name: 'Behance', url: 'https://behance.net/', icon: images.BEHANCE },
        { name: 'Medium', url: 'https://medium.com/@breezesn', icon: images.MEDIUM },
        { name: 'Codepen', url: 'https://codepen.io/Simran-Nagekar', icon: images.CODEPEN },
        { name: 'Instagram', url: 'https://instagram.com/simran.nagekar', icon: images.INSTAGRAM },
        { name: 'Twitter', url: 'https://twitter.com/s1mran0', icon: images.TWITTER },
        { name: 'Reddit', url: 'https://reddit.com/user/BreezieXD', icon: images.REDDIT },
        { name: 'Pinterest', url: 'https://in.pinterest.com/simran_nagekar', icon: images.PINTEREST },
        { name: 'Spotify', url: 'https://https://open.spotify.com/user/31trbfvupfmba4dkc4o445srjxfa', icon: images.SPOTIFY }
    ];

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/src/Components/Files/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container} data-theme={theme}>
            <div className={styles.content}>
                {/* About Section */}
                <section className={styles.aboutSection}>
                    <h2 className={styles.sectionLabel}>About</h2>
                    <h1 className={styles.name}>Design Generalist & Creative Technology Explorer.</h1>
                </section>

                {/* Story Section */}
                <section className={styles.storySection}>
                    <h3 className={styles.storyLabel}>01 | Story</h3>
                    <div className={styles.storyContent}>
                        <p className={styles.paragraph}>
                            Hi! I'm Simran Nagekar — a creative mind with a strong passion for blending technology and design. I thrive on bringing ideas to life, whether it's through game development, immersive designs, or interactive experiences. My curiosity and love for creativity drive me to explore innovative ways to make digital worlds engaging and meaningful.
                        </p>
                        <p className={styles.paragraph}>
                            I originate from the serene coastal town of Karwar, Karnataka but currently based in Bangalore, pursuing my bachelor's degree in Computer Science with a specialization in Multimedia and Animation at REVA University.
                        </p>
                        <p className={styles.paragraph}>
                            From a young age, games have fascinated me — not just as entertainment, but as worlds filled with endless possibilities. I've always been curious about how games work, how they can spark joy, and how creativity shapes the experiences we enjoy. This curiosity has grown into a journey of learning, experimenting, and building.
                        </p>
                        <p className={styles.paragraph}>
                            I design immersive experiences in Game Design, ensure seamless gameplay through Game Testing, craft intuitive UI/UX, and build Product Designs. I embrace challenges, keep evolving, and stay focused on turning my goals into reality.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className={styles.contactSection}>
                    <h3 className={styles.contactLabel}>02 | Contact</h3>
                    <div className={styles.contactContent}>
                        {/* Socials */}
                        <div className={styles.socialsBlock}>
                            <h4 className={styles.contactSubheading}>Socials</h4>
                            <div className={styles.socialIcons}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialIcon}
                                        aria-label={social.name}
                                    >
                                        <img src={social.icon} alt={social.name} className={styles.socialIconImg} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Email */}
                        <div className={styles.emailBlock}>
                            <h4 className={styles.contactSubheading}>Email</h4>
                            <a href="mailto:nagekarsimran@gmail.com" className={styles.emailLink}>
                                nagekarsimran@gmail.com
                            </a>
                        </div>

                        {/* Resume */}
                        <div className={styles.resumeBlock}>
                            <h4 className={styles.contactSubheading}>Resume</h4>
                            <button onClick={handleDownloadResume} className={styles.downloadButton}>
                                Download PDF <span className={styles.downloadIcon}>↓</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className={styles.quoteSection}>
                    <blockquote className={styles.quote}>
                        "The creation of a single world comes from a huge number of fragments and chaos."
                    </blockquote>
                    <p className={styles.quoteAuthor}>— Hayao Miyazaki</p>
                </section>
            </div>

            {/* Footer */}
            <HomeFooter />
        </div>
    )
}

export default AboutPage
