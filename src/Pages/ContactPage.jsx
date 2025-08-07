import React from 'react'
import styles from "./contact.module.css"
import { useSelector } from 'react-redux'
import Icon from '../Components/global/Icon'
import * as images from "../Images/index"
import InputField from '../Components/global/InputField'

function ContactPage() {
    const theme = useSelector((state) => state.themeReducer.mode)
    return (
        <>
            <div className={styles.contact_container} data-theme={theme}>
                <div className={styles.header}>
                    <span>Contact</span>
                    <h1>Get in touch.</h1>
                    <InputField placeholder="Your Name" type="text" />
                    <InputField placeholder="Email" type="email" />
                    <InputField placeholder="Message" type="textarea" />
                    <section>
                        <p>Submit</p>
                        <Icon DarkMode={images.PAPER_PLANE} LightMode={images.PAPER_PLANE}></Icon>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ContactPage
