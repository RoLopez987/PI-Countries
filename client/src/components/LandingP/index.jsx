import React from "react";
import { Link } from "react-router-dom";

import styles from './index.module.css'

export default function LandingP(){
    return(
        <div className={styles.main}>
            <span className={styles.title}>Welcome to the countries webpage</span>
            <Link to='/home'>
                <button className={styles.btn}>Home Page</button>
            </Link>
        </div>
    )
}