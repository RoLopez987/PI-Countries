import React from "react";
import styles from './index.module.css'
export default function AlphaO ({handleSortA}){
    
    return(
        <div className={styles.main}>
            <span >Order by Country </span>

            <select onChange={e => handleSortA(e)} className={styles.btn}>
                    <option value= '' > Op</option>
                    <option value= 'A-Z'>A-Z</option>
                    <option value= 'Z-A'>Z-A</option>      

                </select>
            
        </div>
    )
}