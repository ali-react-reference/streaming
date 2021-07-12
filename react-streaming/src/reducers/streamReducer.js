import _ from 'lodash'

import {
  CREATE_STREAM,
  GET_STREAM,
  GET_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STREAM:
    case GET_STREAM:
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case GET_STREAMS:
      // mapKeys gets the id from an array of objects and uses it as the key in a new object. Then it puts the whole object as the value to the new obj 
      const streamObj = _.mapKeys(action.payload, 'id')
      return { ...state, ...streamObj};
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
