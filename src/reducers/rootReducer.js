import { combineReducers } from 'redux';
import currData from './simpleReducer';
import paginationData from './paginationReducer';
export default combineReducers({
    currData, paginationData
});