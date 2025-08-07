import React from 'react'
import styles from "./Navbar.module.css"
import Navitem from './Navitem'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_PAGE, CHANGETHEME } from '../../store/types'
import * as images from "../../Images/index"

import Icon from './Icon'

function Navbar() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.themeReducer.mode)
    const Navlinks = [
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

    const changepage = (path) => {
        dispatch({ type: CHANGE_PAGE, payload: { url: path, mode: true } });
    }

    const onToggle = () => {
        dispatch({ type: CHANGETHEME, payload: null });
    }

    return (
        <>
            <div className={`${styles.navcontainer}`} data-theme={theme}>
                <section>
                    <p onClick={() => { changepage("/") }}>Simran Nagekar</p>
                </section>
                <section>
                    {
                        Navlinks.map((item, key) => {
                            return (
                                <>
                                    <Navitem title={item.title} onclick={() => { changepage(item.link) }}></Navitem>
                                </>
                            )
                        })
                    }
                    {/* <Toggle onToggle={onToggle}/> */}
                    <div className={styles.box} onClick={onToggle}>
                        <Icon DarkMode={images.DARKMODE} LightMode={images.LIGHTMODE}/>
                        <span>
                            {
                                theme === "light" ? "Light" : "Dark"
                            }
                        </span>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Navbar
