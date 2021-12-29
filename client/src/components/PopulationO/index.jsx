import React from "react";

import styles from './index.module.css'


export default function PopulationO ({handleSortP}){
    return(
        <div className={styles.main}>
            <span>Order by Population</span>

            <select onChange={e => handleSortP(e)} className={styles.btn}>
                    <option value= ''>Op</option>
                    <option value= '0-N'>Asc</option>
                    <option value= 'N-0'>Desc</option>      

                </select>
            
        </div>
    )
}