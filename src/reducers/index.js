import { combineReducers } from 'redux';
import studentReducer from './userReducer';

const rootReducer = combineReducers({
  student: studentReducer,
});

export default rootReducer;
