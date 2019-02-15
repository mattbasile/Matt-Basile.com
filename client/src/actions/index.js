import axios from 'axios'



export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL"; 


export const getData = (data => dispatch =>{
    dispatch({type: FETCH_DATA_SUCCESS, payload: data});
  })

  

export const fetchPortfolio = (payload) => dispatch=> ({
  
})
