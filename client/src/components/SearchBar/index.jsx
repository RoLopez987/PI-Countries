
import React from "react";
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchName}from '../../redux/actions'

import styles from './index.module.css'

export default function SearchBar() {
const dispatch=useDispatch();
const [name,setName]=useState('');

function handleInputChange(e){
e.preventDefault();   
setName(e.target.value)

}

function handleSubmit(e){
    e.preventDefault();
    dispatch(searchName(name))
}

return(
    <div className={styles.main}>
        <input type= 'text' placeholder='Country search...' onChange={(e)=>handleInputChange(e)} className={styles.inp}/>
        <button type='submit' onClick={(e)=> handleSubmit(e)} className={styles.btn}>Search</button>

    </div>
)
}