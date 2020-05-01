import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

//for numbers, strings or booleans you don't have to return a new variable;
const authReducer = (isSignedInOldState = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...isSignedInOldState, isSignedIn: true, userId: action.payload.userId}
        case SIGN_OUT:
            return {...isSignedInOldState, isSignedIn: false, userId: null};
        default:
            return isSignedInOldState;
    }
}

export default authReducer;