import axios from 'axios'



export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAIL = "FETCH_ARTICLES_FAIL"; 


export const getArticles = () => dispatch =>{
    dispatch({type: FETCH_ARTICLES_START});
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mattbasile")
    .then(res => dispatch({type: FETCH_ARTICLES_SUCCESS, payload: res.data}))
    .catch(err => console.log(err))
  }

  

export const fetchPortfolio = (payload) => dispatch=> ({
  
})
