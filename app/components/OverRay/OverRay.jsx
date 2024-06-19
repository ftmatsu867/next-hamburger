import React from 'react'
import styles from "./OverRay.module.scss"

const OverRay = ({ isOpen, setIsOpen }) => {
    const doClick = () => {
        setIsOpen((prev) => {
            return !prev
        })
    }
    return (
        <div className={isOpen ? styles.overRay : null} onClick={doClick}></div>
    )
}

export default OverRay