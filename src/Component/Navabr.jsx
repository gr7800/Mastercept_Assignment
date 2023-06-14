import React from 'react'
import styles from "./Navbar.module.css"

const Navabr = () => {
  return (
    <div className={styles.Navabr}>
        <div>
            Title
        </div>
        <div>
            <button>Home</button>
            <button>About</button>
            <button>Blog</button>
            <button>Contact</button>
            <button>Button</button>
        </div>
    </div>
  )
}

export default Navabr