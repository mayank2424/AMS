import { combineReducers } from 'redux';
import userReducer from './user';
import articlesReducer from './articles';

export default combineReducers({
    userState: userReducer,
    articlesState: articlesReducer
})