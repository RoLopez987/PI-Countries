import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useEffect, useState} from "react";


import styles from './index.module.css'

import { getAllCountries,alphabeticalOrder,populationOrder, filterActivities } from "../../redux/actions";


import SearchBar from "../SearchBar";

import FilterActivity from "../FilterActivity";
import FilterRegion from "../FilterRegion";

import Paging from "../Paging";



import PopulationO from "../PopulationO";
import AlphaO from "../AlphaO"

import CountriesCards from "../CountriesCards";


export default  function HomeP (){
    
    //aca nos traemos la info de la api
    
    const dispatch = useDispatch();
      
    const allCountries = useSelector((state) => state.countries);
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    

    //aca vamos a hacer la paginacion== paging

const [currentPage,setCurrentPage]= useState(1);

const countriesPerPage = 10;

const iLastCountry = currentPage * countriesPerPage;
const iFirstCountry = iLastCountry-countriesPerPage;
const currentCountries = allCountries.slice(iFirstCountry,iLastCountry);

const paging = (pageNumber) => {
    setCurrentPage(pageNumber)
}


   
function handleClick(e){ 

    e.preventDefault(); 
    dispatch(getAllCountries());

}
    
//aca  ordenar alf y por pobl

function handleSortA(e){
    e.preventDefault();
    dispatch(alphabeticalOrder(e.target.value))
    setCurrentPage(1);
    
}


function handleSortP(e){
    e.preventDefault();
    dispatch(populationOrder(e.target.value))
    setCurrentPage(1);
    
}

//pinto filtrar por activity ahora

function handleFilterActivity(e){
    e.preventDefault();
    dispatch(filterActivities(e.target.value))

}
return(
    
        <div className={styles.main}>
             <Link to='/'>
                <button className={styles.landbtn}>Landing Page</button>
             </Link>
             <Link to='/home/activityform'>
                <button className={styles.createactbtn} >Create your Activity!</button>
             </Link>
            
            <button onClick={ (e) => {handleClick(e)}} className={styles.refreshbtn}>Refresh countries</button> 
            <SearchBar/>

            <FilterRegion />

            <FilterActivity  handleFilterActivity={handleFilterActivity}/>
    
            <AlphaO handleSortA={handleSortA}/>
            <PopulationO handleSortP={handleSortP}/>

            <Paging  countriesPerPage={countriesPerPage} allCountries={allCountries.length} paging={paging}/>  
        
                 <CountriesCards countries = {currentCountries} />
             </div>                
    
    )
}