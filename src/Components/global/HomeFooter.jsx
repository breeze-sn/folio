import React from 'react'
import styles from "./footer.module.css"
import Navitem from "./Navitem"
import { CHANGE_PAGE } from '../../store/types'
import { useDispatch, useSelector } from 'react-redux'

function HomeFooter() {
    const dispatch = useDispatch()
    const Navlinks = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Projects",
            link: "/project"
        },
        {
            title: "Contact",
            link: "/contact"
        }
    ]
    const Navlinks2 = [
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/simransn/"
        },
        {
            title: "Bento",
            link: "/https://bento.me/breezee"
        },
        {
            title: "Github",
            link: "https://github.com/breeze-sn"
        },
        {
            title: "Behance",
            link: "/https://www.behance.net/simrannagekar"
        }
    ]

    const changepage = (path) => {
        if(path[0] === '/'){
            dispatch({ type: CHANGE_PAGE, payload: { url: path, mode: true } });
        }
        else{
            window.open(path);
        }
    }

    return (
        <>
            <div className={styles.footer}>
                <section>
                    <p>Want to collaborate?</p>
                    <h2>Let's work together.</h2>
                    <span>say hello &rarr;</span>
                </section>
                <ul>
                    <Navitem title="Home" onclick={null} style={{opacity: "50%", border: "none !important"}} disabled={true}></Navitem>
                    {
                        Navlinks.map((item, key) => {
                            return (
                                <>
                                    <Navitem title={item.title} onclick={() => { changepage(item.link) }}></Navitem>
                                </>
                            )
                        })
                    } 
                </ul>
                <ul>
                    <Navitem title="Socials" onclick={null} style={{opacity: "50%", border: "none !important"}} disabled={true}></Navitem>
                    {
                        Navlinks2.map((item, key) => {
                            return (
                                <>
                                    <Navitem title={item.title} onclick={() => { changepage(item.link) }}></Navitem>
                                </>
                            )
                        })
                    } 
                </ul>
            </div>
        </>
    )
}

export default HomeFooter
