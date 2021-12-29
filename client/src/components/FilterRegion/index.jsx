import React from "react";
//spoiler: antartida no tiene paises, pero si es un continente, por eso lo dejamos nomas
import { useDispatch } from "react-redux";
import { filterRegion } from "../../redux/actions";

import styles from './index.module.css'

export default function FilterRegion (){

    const dispatch = useDispatch();
    function handleFilterRegion(e){
        e.preventDefault();
        dispatch(filterRegion(e.target.value))
    
    }
    
    return(
        <div className={styles.main}>
            <span>Region</span>

            <select onChange= {e => handleFilterRegion(e)} className={styles.btn}>
                    <option value='All'>All</option>
                    
                    <option value= 'Africa'>Africa</option>
                    <option value= 'Americas'>America</option>
                    {/* <option value= 'region'>Antartida</option> */}
                    <option value= 'Asia'>Asia</option>
                    <option value= 'Europe'>Europe</option>
                    <option value= 'Oceania'>Oceania</option>      

                </select>
        </div>
    )
}