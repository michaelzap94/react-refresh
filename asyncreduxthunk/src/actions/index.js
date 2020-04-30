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
        dispatch(action);
    }
}
//SAME AS ABOVE BUT USING ES6 SYNTAX
// export const fetchPosts = () => async (dispatch) => {
//     const response = await jsonPlaceholder.get('/posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response.data });
//   };
//============================================================
//BASIC
export const fetchUser = (userId) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${userId}`);
        const action =  {
            type: 'FETCH_USER',
            payload : response.data
        }
        dispatch(action);
    }
}
//===============================================================
//ActionCreator that will use ActionCreators internally to merge or do some operation using multiple ActionCreators
//When we call internalAC inside an AC, we need to ensure we manually call dispatch(internalAC),
export const fetchPostsAndUsers = (id) => {
    return async(dispatch, getState) => {
        //when we dispatch a function: redux-thunk will catch it and run it
        //once it runs it, it will pass a dispatch argument to dispatch its own Action internally
        await dispatch(fetchPosts());//manually dispatching fetchPosts() and wait here before we move onto the next line
        //after doing this// our STATE should be updated and contain the Posts, that can be retrieved using getState getState().postsReducer

        const userIds = _.uniq(//return an array of unique items
            _.map(getState().postsReducer, 'userId')//return an array of userId's
        );
        //now that we have an array of unique items, we need to dispatch our fetchUser() Action passing the id of each item
        userIds.forEach(id => dispatch(fetchUser(id)));
        //in this case we don't need to await for it because we don't depend on each other. 
        //we only depended on the posts being fetched first.

        // _.chain(getState().postsReducer)
        // .map('userId')
        // .uniq()
        // .forEach(id => dispatch(fetchUser(id)))
        // .map('userId')
        // .value();
    }
};
// async (dispatch, getState) => {
//     await dispatch(fetchPosts());
  
//     _.chain(getState().posts)
//       .map('userId')
//       .uniq()
//       .forEach(id => dispatch(fetchUser(id)))
//       .value();
//   };

//============================================================
// YOU CAN NEVER REFETCH An Action with _.memoize()
//_.memoize() -> caches the first result and then return the cached result
// export const fetchUser = (id) => {
//     return (dispatch) => {
//         return _fetchUser(id, dispatch);
//     }
// }
// //we memoize the api call and dispatch outside. one time only
// const _fetchUser = _.memoize(
//     async (id, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: 'FETCH_USER', payload: response.data });
//     }
// );
//============================================================
