import { combineReducers } from 'redux';
import PostsReduer from './reducer_posts'

const rootReducer = combineReducers({
  posts: PostsReduer
});

export default rootReducer;
