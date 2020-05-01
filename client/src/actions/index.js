import {SIGN_IN, SIGN_OUT} from './types';
//NO PAYLOAD, SINCE the reducer will turn the boolean flag to true or false if the type is SIGN_IN OR SIGN_OUT
export const signInAC = (userId) => {
    return {
        type: SIGN_IN,
        payload: {
            userId
        }
    }
}
export const signOutAC = () => {
    return {
        type: SIGN_OUT
    }
}