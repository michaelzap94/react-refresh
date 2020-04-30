//this reducer is supposed to maintain a list of posts we have fetched from the jsonPlaceholder API.
//se we just need to return the action.payload -> which will contain the {payload: response.data}
//when we return this, the app will be rerender and the data should be available everywhere.
export default (oldState = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
          return action.payload;
        default:
          return oldState;
      }
}