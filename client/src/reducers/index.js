import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';

//the KEY of the formReducer must be form.
export default combineReducers({
    authReducer,
    form: formReducer
});