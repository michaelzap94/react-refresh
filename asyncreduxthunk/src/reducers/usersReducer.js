export default (oldState = [], action) => {
    switch (action.type) {
      case 'FETCH_USER':
        return [...oldState, action.payload];
      default:
        return oldState;
    }
  };