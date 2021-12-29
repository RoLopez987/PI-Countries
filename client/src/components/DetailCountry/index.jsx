import React from "react";
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import{countryDetail} from '../../redux/actions';
import { useEffect } from 'react';
import ActivityCard from '../ActivityCard/index'

import styles from './index.module.css'

export default function DetailCountry(props){
    
    let params = useParams();

    const dispatch= useDispatch()
    const country = useSelector((state)=>state.details)
    useEffect(()=>{
        dispatch(countryDetail(params.id))
    }, [dispatch,params.id]

    )
    
    return(
        <div className={styles.main}>
            <Link to='/home'>
                <button className={styles.homebtn}>Home Page</button>
           </Link>
 
                <img src={country.image} alt="no such flag found" width="400vw" height="250vw" className={styles.image}/>
                <div className={styles.info}>
                    <h1>{country.name}</h1>
                    <h3>Id: {country.id}</h3>            
                    <h3>Capital: {country.capital}</h3>
                    
                    <h3>Region: {country.region}</h3>
                    <h3>Area: {country.area}  km2 </h3>
                    <h3>Population: {country.population}</h3>

                    <h3>Subregion: {country.subregion}</h3>
                </div>

            <div className={styles.act}>
                <h1>Activities:</h1>
                {country.activities?.length ? country.activities.map((activity) => (
                       <ActivityCard
                            activity={activity}
                            key={activity}
                        />
                    
                )):<h2>It has no activities created</h2>}
            </div>

        </div>

 
 )
}