import React from 'react'
import styles from "./toggle.module.css"
import { useDispatch, useSelector } from 'react-redux'

function Toggle({onToggle, classname, style, icon}) {
    const theme = useSelector((state) => state.themeReducer.mode)

    return (
        <>
            <div className={styles.toggle} style={style} onClick={onToggle} data-theme={theme}>
                <div className={styles.button}>
                    <span className={theme === "light" ? styles.on : styles.off}></span>
                </div>
                {
                    icon &&
                    <img src={icon} alt="err" />
                }
            </div>
        </>
    )
}

export default Toggle
