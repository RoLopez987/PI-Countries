// Importa las actions types que necesites acá:
import {
    GET_ALL_COUNTRIES,
    ALPHABETICAL_ORDER,
    POPULATION_ORDER,
    FILTER_REGION,
    SEARCH_NAME,
    COUNTRY_DETAIL,

    GET_ACTIVITIES,
    POST_ACTIVITY,
    FILTER_ACTIVITY
  } from "../actions";
  
const initialState ={
    countries:[],
    allCountries:[],
    activities:[],
    allActivities:[],
    details:[]

}

const rootReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES: 
            return {
              ...state,
              countries: action.payload,
              allCountries: action.payload
            };
        
        case ALPHABETICAL_ORDER:
          
            let alphOrder = action.payload === 'A-Z' ?
                state.countries.sort(function (a,b){
                  if(a.name > b.name){
                    return 1;
                  }
                  if(b.name > a.name){
                    return -1;
                  }
                  return 0;
                }):
                state.countries.sort(function (a,b){
                  if(a.name > b.name){
                    return -1;
                  }
                  if(b.name > a.name){
                    return 1;
                  }
                  return 0;
                })
          return {
              ...state,
              countries:alphOrder
          }
          

          case POPULATION_ORDER:
          
            let popOrder = action.payload === '0-N' ?
                state.countries.sort(function (a,b){
                 
                 return a.population - b.population
                }):
                state.countries.sort(function (a,b){
                  return b.population - a.population
                })
          return {
              ...state,
              countries:popOrder
          }
        
          case FILTER_REGION:

                let allCountries = state.allCountries;

                let regFilt = action.payload === 'All'? allCountries :
                allCountries.filter( c => c.region === action.payload)
            return{
              ...state,
              countries: regFilt
            }

          case SEARCH_NAME:
              return {
                ...state,
                countries:action.payload
            }
      
          case COUNTRY_DETAIL:
            return{
              ...state,
              details:action.payload  
          }
     


          case GET_ACTIVITIES:
            return{
              ...state,
              activities: action.payload,
              allActivities: action.payload
            }
          
          

            case FILTER_ACTIVITY:
              
              return{
                ...state,
                countries:state.allCountries.filter(el => el.activities.map(e=>e.name).includes(action.payload))
              } 
               
              case POST_ACTIVITY:
              return {
                ...state
              }

          default:
            return initialState;
        }
    
    
    }
    
    export default   rootReducer;