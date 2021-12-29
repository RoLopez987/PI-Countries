import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { postActivity} from '../../redux/actions';
import { useDispatch, useSelector} from 'react-redux';
import { getAllCountries } from '../../redux/actions';

import styles from './index.module.css'


export default function CreateActivity (){

    const dispatch = useDispatch();
    
    const allCountries = useSelector((state) => state.allCountries);// es igual a hacer mapStateToProps

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    const [input, setInput] = useState({
        name:'',
        duration:'',
        difficulty:'',
        season:'',
        countriesid:[]
    })
    
    const [errors, setErrors] = useState("");


    //handlers

    function handleChange (e){
        
        setInput({
            ...input,
            [e.target.name]: e.target.value,

        });
        setErrors(
            validate({
              ...input,
              [e.target.name]: e.target.value,
            })
          );

    }


    function handleSelect(e){
        setInput({
            ...input,
            countriesid:[...input.countriesid,e.target.value]
        })
    }

    
    function handleSelectSeason(e){
        setInput({
           ...input,
            season: e.target.value
        })
    }

    function handleSelectDifficulty(e){
        setInput({
           ...input,
            difficulty: e.target.value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(errors.name  || errors.duration){
           alert('Fields not filled') 
        }
        else{
            dispatch(postActivity(input))
        alert('Activity created')

        setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countriesid: [],
        })
        }
        
    }

    function handleRemove(e,id){
        e.preventDefault();
        setInput({
            ...input,
            countriesid: input.countriesid.filter( countryid => countryid !== id)
        })
    }

      return(
          
        <div className={styles.main}>
            <Link to='/home'>
                <button className={styles.homebtn}>Home</button>
            </Link>
        <div className={styles.for}>
            <h1>Let's create an activity!</h1>

            <form onSubmit ={(e)=> handleSubmit(e)}>
                <div>
                <label>Activity:</label>
                    <input 
                        type='text' 
                        placeholder='What would you like to do?' 
                        value={input.name} name='name' 
                        onChange={(e)=>handleChange(e)}
                        className={errors.name }
                    />

                      {
                        errors.name && (
                            <p className="danger">{errors.name}</p>
                        )
                      }

                </div>

                <div>
                <label>Duration:</label>
                    <input 
                        type='text' 
                        placeholder='For how long?' 
                        value={input.duration} 
                        name='duration' 
                        onChange={handleChange}
                        className={errors.duration}
                        
                    />
                    {
                        errors.duration && (
                            <p className="danger">{errors.duration}</p>
                        )
                      }
           
                </div>

                <div>
                <label>Country: </label>

                <select onChange={(e)=>handleSelect(e)} className={errors.countriesid}>
                {allCountries.map((c)=>(
                    <option value={c.id} key={c.id} >{c.name}</option>

                ))}
                </select>
                </div>


                <div>
                    <label>Season:</label>
                    <select onChange={(e)=>handleSelectSeason(e)} className={errors.season}> 
                    <option value=''>Op</option>
                    <option value='Spring'>Spring</option>
                    
                    <option value= 'Summer'>Summer</option>
                    <option value= 'Autumn'>Autumn</option>
                    <option value= 'Winter'>Winter</option>      

                </select>
                
                </div>

                <div>
                    <label>Difficulty:</label>
                    <select  onChange={(e)=>handleSelectDifficulty(e)}className={errors.difficulty}>
                    <option value=''>Op</option>
                        <option value='1'>1</option>
                        <option value= '2'>2</option>
                        <option value= '3'>3</option>
                        <option value= '4'>4</option>  
                        <option value= '5'>5</option>          
                    </select>
                    

                </div>


                <button type='submit' className={styles.createbtn}>Create Activity</button>
            </form>
            <div>
                    <ul className={styles.ul}>
                        <li>{input.countriesid.map(c=>{
                            return (
                                <div>
                                    <span> {c} </span>
                                    <button onClick={(e)=>handleRemove(e,c)}>X</button>
                                </div>
                            )
                        })} 
 
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'Name is required!';
    }
    if (!input.duration) {
        errors.duration = 'Duration is required!';
      }
    return errors;
  };