import React from "react";
import "./navbar.css"

export default function Navbar(){
    return(
        <>
            <div className="navbar-main">
                <span>Simran Nagekar</span>
                <span>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Resume</li>
                    </ul>
                </span>
            </div>
        </>
    )
}
