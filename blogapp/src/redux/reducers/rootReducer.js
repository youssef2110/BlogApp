import {combineReducers} from 'redux';
import postReducer from './postReducer';
import searchReducer from './searchReducer';

const rootReducers = combineReducers({
    post : postReducer,
    search : searchReducer,
})

export default  rootReducers