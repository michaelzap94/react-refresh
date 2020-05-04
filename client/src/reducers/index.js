import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import streamsReducer from './streamReducer';

//the KEY of the formReducer must be form.
export default combineReducers({
    authReducer,
    form: formReducer,
    streamsReducer
});