import { combineReducers } from 'redux';
import PostsReduer from './reducer_posts'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReduer,
  form: formReducer
});

export default rootReducer;
