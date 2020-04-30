//this reducer is supposed to maintain a list of posts we have fetched from the jsonPlaceholder API.
//se we just need to return the action.payload -> which will contain the {payload: response.data}
export default (oldState = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
          return action.payload;
        default:
          return oldState;
      }
}