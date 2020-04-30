import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


// export const fetchPosts = async () => {
//     //THIS ALONE WILL NOT WORK because of 2 problems:
//     //1) because response from async/await is a promise, and we need to RETURN a PLAIN JS OBJECT
//     //ALSO
//     //2) This is returned immediatly, so by the time we get to the reducer, we won't have fetched the data yet.

//     // const response = await jsonPlaceholder.get('/posts');
//     // //return ACTION
//     // return {
//     //     type: 'FETCH_POSTS',
//     //     payload : response
//     // }
// }

//Since we hooked up redux-thunk to the Store in index.js, we can now use it
//remember that now, redux-thunk can handle normal Action objects or Function objects
export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('/posts');
        const action =  {
            type: 'FETCH_POSTS',
            payload : response.data
        }
        dispatch(action)
    }
}
//SAME AS ABOVE BUT USING ES6 SYNTAX
// export const fetchPosts = () => async (dispatch) => {
//     const response = await jsonPlaceholder.get('/posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response.data });
//   };
//============================================================



