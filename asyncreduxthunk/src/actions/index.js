import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async (dispatch) => {
    //THIS ALONE WILL NOT WORK because of 2 problems:
    //1) because response from async/await is a promise, and we need to RETURN a PLAIN JS OBJECT
    //ALSO
    //2) This is returned immediatly, so by the time we get to the reducer, we won't have fetched the data yet.

    // const response = await jsonPlaceholder.get('/posts');
    // //return ACTION
    // return {
    //     type: 'FETCH_POSTS',
    //     payload : response
    // }

    //==========================================================

}

