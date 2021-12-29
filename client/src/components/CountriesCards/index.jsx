import React from 'react';

import styles from './index.module.css'

import CountryCard from '../CountryCard';

export default function CountriesCards({countries}) {
  // acá va tu código
  
  return (
        <div className={styles.main}>
        {
                countries.map((c)=>{
                return (
                    <div key={c.id}>
                    
                        <CountryCard
                          country={c}
                          
                        />
                    
                    </div>
                ) 

                })
        }   
        </div>

)};  


