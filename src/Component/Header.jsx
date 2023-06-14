import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus molestias repellat ex, blanditiis aliquam ducimus dolorum libero quo consequuntur provident accusantium necessitatibus ipsa quasi?</p>
        <button>Read More</button>
    </div>
  )
}

export default Header