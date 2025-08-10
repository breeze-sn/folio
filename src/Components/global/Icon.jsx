import React from 'react'
import { useSelector } from 'react-redux'

function Icon({DarkMode, LightMode}) {
    const theme = useSelector((state) => state.themeReducer.mode)
    return (
        <>
            <img src={ theme === "light" ? LightMode : DarkMode} alt="Error" style={theme !== "light" ? {filter: "invert(100%)"} : null}/>
        </>
    )
}

export default Icon
