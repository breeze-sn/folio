import React, { useState } from 'react'
import styles from "./inputfield.module.css"

function InputField({ type, placeholder, value, onChange }) {
    const [InputValue, setInputValue] = useState("")

    const ChangeText = (e) => {
        const newValue = e.target.value
        setInputValue(newValue)
        if (onChange) {
            onChange(newValue)
        }
    }

    // Use controlled value if provided, otherwise use local state
    const displayValue = value !== undefined ? value : InputValue

    return (
        <>
            <div className={styles.inputfield}>
                <i 
                    style={displayValue === "" ? { opacity: 1 } : { opacity: 0.5 }}
                >{placeholder}</i>
                {
                    type === "textarea" ?
                        <textarea value={displayValue} onChange={ChangeText} />
                        : <input type={type} value={displayValue} onChange={ChangeText} />
                }
            </div>
        </>
    )
}

export default InputField
