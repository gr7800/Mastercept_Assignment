import React from 'react'
import styles from "./displaydata.module.css"
import data from "../utills/data.json"

const Displaydata = () => {

    return (
        <div className={styles.datamain}>
            <h1>
                Classes
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aut laudantium aliquam laborum unde optio incidunt laboriosam </p>
            <div className={styles.container}>
                {data && data.map((el) => (
                    <div>
                        <div>
                            Add Image
                        </div>
                        <div>
                            <h3>{el.Name}</h3>
                            <p>{el.ShortDesc}</p>
                            <button>View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Displaydata