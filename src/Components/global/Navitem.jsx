import React, { useState } from 'react'
import styles from "./Navbar.module.css"

function Navitem({ title, onclick }) {

    const [hovering, setHovering] = useState(false);

    return (
        <>
            <div className={`${styles.navitem}`} onClick={onclick} onMouseOver={() => { setHovering(true) }} onMouseLeave={() => { setHovering(false) }}>
                <span>{title}</span>
                <b className={`${hovering ? styles.hover_link : null}`}></b>
            </div>
        </>
    )
}

export default Navitem
