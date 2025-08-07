import React, { useState } from 'react'
import styles from "./Navbar.module.css"

function Navitem({ title, onclick, classname, style, disabled }) {

    const [hovering, setHovering] = useState(false);

    return (
        <>
            <div className={`${styles.navitem} ${classname}`} onClick={onclick} onMouseOver={() => { setHovering(true) }} onMouseLeave={() => { setHovering(false) }} style={style}>
                <span>{title}</span>
                <b className={`${hovering ? styles.hover_link : null}`} style={disabled ? {display: "none"} : {}}></b>
            </div>
        </>
    )
}

export default Navitem
