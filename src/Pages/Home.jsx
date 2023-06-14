import React from 'react'

import styles from "./Home.module.css"
import Navabr from '../Component/Navabr'
import Header from '../Component/Header'
import Displaydata from '../Component/Displaydata'

const Home = () => {
    return (
        <div className={styles.container}>
            <Navabr />
            <Header />
            <Displaydata />
            <div className={styles.footer}>
               <p>Copyright © 2021. All Rights Reserved</p>
               <p>Back to top</p>
            </div>
        </div>
    )
}

export default Home