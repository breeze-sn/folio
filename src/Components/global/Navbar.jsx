import React from 'react'
import styles from "./Navbar.module.css"
import { useNavigate } from 'react-router-dom'
import Navitem from './Navitem'
import { useDispatch } from 'react-redux'
import { CHANGE_PAGE } from '../../store/types'

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Navlinks = [
        {
            title: "About",
            link:"/about"
        },
        {
            title: "Projects",
            link:"/project"
        },
        {
            title: "Resume",
            link:"/resume"
        }
    ]

    const changepage = (path)=>{
        dispatch({type: CHANGE_PAGE,payload: {url: path,mode: true}});
    }

    return (
        <>
            <div className={`${styles.navcontainer}`}>
                <section>
                    <p onClick={()=>{changepage("/")}}>Simran Nagekar</p>
                </section>
                <section>
                    {
                        Navlinks.map((item,index)=>{
                            return(
                                <>
                                    <Navitem title={item.title} onclick={()=>{changepage(item.link)}}></Navitem>
                                </>
                            )
                        })
                    }
                </section>
            </div>
        </>   
    )
}

export default Navbar
