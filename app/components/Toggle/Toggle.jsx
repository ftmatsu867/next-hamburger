import React from 'react'
import styles from "./Toggle.module.scss"

const Toggle = ({isOpen}) => {
  return (
    <nav className={isOpen?`${styles.open} ${styles.toggle}`:`${styles.close} ${styles.toggle}`}>
        <ul className={styles.ul}>
            <li className={styles.li}>Home</li>
            <li className={styles.li}>Detail</li>
            <li className={styles.li}>Contact</li>
        </ul>
    </nav>
  )
}
  
export default Toggle