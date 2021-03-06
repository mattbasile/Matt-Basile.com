// imports
import data from '../data/data.json'
import{
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL
} from '../actions'


const initialState = {
  projects: data.projects,
  profile: data.profile,
  articles: [],
  error: null,
  isFetchingArticles: true,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES_START:
    return{
      ...state,
      error: null,
      isFetchingArticles: true
    };
    case FETCH_ARTICLES_SUCCESS:
    const articlesList = payload.items.filter(article => {
      return article.categories.length > 0 ? article : null
      }
    )
    return{
      ...state,
      error: null,
      isFetchingArticles: false,
      articles: articlesList
    };
    case FETCH_ARTICLES_FAIL:
    return{
      ...state,
      error: payload,
      isFetchingArticles: false
    };
  default:
    return state
  }
  }
  

