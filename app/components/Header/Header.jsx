import React from 'react'
import styles from "./Header.module.scss"
const Header = ({isOpen,setIsOpen}) => {
    const doChange=()=>{
        setIsOpen((prev)=>!prev)
    }
  return (
    <header className={styles.header}>
        <div className={styles.toggle} onClick={doChange}>
            <div className={isOpen?styles.close:styles.menu}></div>
            <div className={isOpen?styles.close:styles.menu}></div>
            <div className={isOpen?styles.close:styles.menu}></div>
        </div>
    </header>
  )
}

export default Header