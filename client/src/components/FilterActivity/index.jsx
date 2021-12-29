import React, { useEffect } from 'react';
import { getActivities} from '../../redux/actions';
import { useDispatch, useSelector} from 'react-redux';

import styles from './index.module.css'


export default function FilterActivity ({handleFilterActivity}){

    const dispatch = useDispatch();
    
    const allActivities = useSelector((state) => state.activities);// es igual a hacer mapStateToProps

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);

    
    return(
        <div className={styles.main}>
            <span>Activity </span>

                <select onChange= {e => handleFilterActivity(e)} className={styles.btn}>
                <option>Op</option>
                {allActivities.map((c)=>(
                    <option value={c.name} key={c.name}  >{c.name}</option>

                ))}
                </select>
           
        </div>
    )
}