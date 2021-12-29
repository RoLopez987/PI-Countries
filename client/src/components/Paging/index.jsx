import React from "react";

import styles from './index.module.css'

export default function Paging ({countriesPerPage,allCountries,paging}){
    const pageNumbers=[];

    for( let i=0; i <= Math.ceil(allCountries/countriesPerPage)-1; i++){
        pageNumbers.push(i+1);
    }
    

return(  
        <div className={styles.main}>
            
            <ul className={styles.ul}>
            
                {

                    pageNumbers.map( number =>{
                        return(
             
                        <li key={number}>
                        <button onClick={() => paging(number)} className={styles.btn}>{number}</button>
                        </li>
             
                        )
                        
                    })

                }
            </ul>
        </div>   
)
}
