import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const ALPHABETICAL_ORDER ='ALPHABETICAL_ORDER';
export const POPULATION_ORDER ='POPULATION_ORDER';
export const FILTER_REGION = 'FILTER_REGION';
export const SEARCH_NAME = 'SEARCH_NAME';
export const COUNTRY_DETAIL='COUNTRY_DETAIL';

export const FILTER_ACTIVITY= 'FILTER_ACTIVITY';
export const POST_ACTIVITY='POST_ACTIVITY';
export const GET_ACTIVITIES='GET_ACTIVITIES';

export function getAllCountries() {
    return async function (dispatch) {

        var json = await axios.get(
          "http://localhost:3001/countries")
        return dispatch({ type: GET_ALL_COUNTRIES, payload: json.data });
      
    };
  } 


export function alphabeticalOrder(payload){
  return {
    type: ALPHABETICAL_ORDER,
    payload
  }
}


export function populationOrder(payload){
  return {
    type: POPULATION_ORDER,
    payload
  }
}


export function filterRegion(payload){
  return {
    type: FILTER_REGION,
    payload
  }
}


export function searchName (name){
    
  return async function(dispatch){
      try {

          var json = await axios.get(
            'http://localhost:3001/countries?name='+name)
              return dispatch({
                  type:SEARCH_NAME,
                  payload: json.data
                })
      } catch(error){
              console.log(error)
          }
  }

}

export function countryDetail(id){
  return async function(dispatch){
      try{
          var json = await axios.get('http://localhost:3001/countries/'+id);
          return dispatch({
              type: COUNTRY_DETAIL,
              payload: json.data
          })
      } catch(error){
          console.log(error)
      }
  }

}
//-------------------------------------------- Ahora viene activities
export function getActivities() {
  return async function (dispatch) {

      var json = await axios.get(
        "http://localhost:3001/activities")
      return dispatch({ 
        type: GET_ACTIVITIES, 
        payload: json.data
      });
    
  };
} 

export function postActivity(payload){
  return async function (dispatch){
      const response= await axios.post('http://localhost:3001/activities/',payload)
      return dispatch({
        type : POST_ACTIVITY,
        payload : response
      })
  }
}


export function filterActivities(payload) {
  
  return {
    type: FILTER_ACTIVITY,
    payload,
  };
}

