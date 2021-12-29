import React from "react";
import { Link } from "react-router-dom";

import styles from './index.module.css'

export default function CountryCard({country}){
    return(
    <div className={styles.card}>
          <h1>
          {country.name}
          </h1>
            
          <h2>
            Region: {country.region}
          </h2>  
            

          <Link to={"/home/" + country.id}>
          <img src={country.image} alt='flag not found' width='170px' height='170px'/>
          </Link>
  
  
    </div>
  )
};

