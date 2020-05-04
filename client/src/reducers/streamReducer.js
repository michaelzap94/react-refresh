import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
  } from '../actions/types';

  export default (state = {}, action) => {
    switch (action.type) {
      case FETCH_STREAMS:
        return { ...state, ..._.mapKeys(action.payload, 'id') };
        //Will take an array, and will return an object
        //the key in the new object will be the key 'id' of each object in the array
        //and the value in the new object will be the whole object that we got the 'id' property from
        //{...obj1, ...obj2} -> merging objects
      case FETCH_STREAM:
        return { ...state, [action.payload.id]: action.payload };
      case CREATE_STREAM:
        return { ...state, [action.payload.id]: action.payload };
      case EDIT_STREAM:
        return { ...state, [action.payload.id]: action.payload };//action.payload ===> {id:, title:, description:}
      case DELETE_STREAM:
        return _.omit(state, action.payload);//action.payload ===> 'some id'
      default:
        return state;
    }
  };