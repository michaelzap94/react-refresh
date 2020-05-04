import streams from '../apis/streams';
import {SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM} from './types';
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

export const createStreamAC = (formValues) => {
    return async (dispatch, getState) => {//redux-thunk will return these 2 arguments
        //console.log(getState());//you can get the current State data
        const {userId} = getState().authReducer;
        const response = await streams.post('/streams', {...formValues, userId});//this will respond with the data inserted + id of new record row
        const action = {
            type: CREATE_STREAM,
            payload: response.data
        }
        dispatch(action);
    }
}

export const fetchAllStreamsAC = () => {
    return async (dispatch, getState) => {
        const response = await streams.get('/streams');
        const action = {
            type: FETCH_STREAMS,
            payload: response.data
        }
        dispatch(action);
    }
}

export const fetchStreamAC = (streamId) =>  async (dispatch, getState) => {
    const response = await streams.get(`/streams/${streamId}`);
    const action = {
        type: FETCH_STREAM,
        payload: response.data
    }
    dispatch(action);
}

export const editStreamAC = (streamId, formValues) => async (dispatch, getState) => {
    const response = await streams.put(`/streams/${streamId}`, formValues);//this will respond with the data inserted + id of record row
    const action = {
        type: EDIT_STREAM,
        payload: response.data
    }
    dispatch(action);
}

export const deleteStreamAC = (streamId) => async (dispatch, getState) => {
    const response = await streams.delete(`/streams/${streamId}`);//this will respond with the data inserted + id of new record row
    const action = {
        type: DELETE_STREAM,
        payload: streamId
    }
    dispatch(action);
}