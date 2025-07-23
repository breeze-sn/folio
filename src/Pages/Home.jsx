import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const theme = useSelector((state) => state.themeReducer.mode);
    return (
        <>
        Hello this is home {theme}
        </>
    )
}

export default Home