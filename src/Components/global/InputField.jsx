import React, { useState } from 'react'
import styles from "./inputfield.module.css"

function InputField({ type, placeholder }) {
    const [InputValue, setInputValue] = useState("")

    const ChangeText = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            <div className={styles.inputfield}>
                <i 
                    style={InputValue === "" ? { opacity: 1 } : { opacity: 0.5 }}
                >{placeholder}</i>
                {
                    type === "textarea" ?
                        <textarea onChange={ChangeText} />
                        : <input type={type} onChange={ChangeText} />
                }
            </div>
        </>
    )
}

export default InputField
