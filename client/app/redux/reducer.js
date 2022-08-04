import * as $ from './actions';

const initialState = {
  USER: [],
  GET_USER_REQUEST_STATUS: 0,
  GET_USER_REQUEST_ERROR: false,

  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   
    case $.GET_USER_REQUEST: {
      return {
        ...state,
        GET_USER_REQUEST_STATUS: 1,
      };
    }
    case $.GET_USER_REQUEST_SUCCESS: {
      return {
        ...state,
        GET_USER_REQUEST_STATUS: 2,
        USER: action.USER,
      };
    }
    case $.GET_USER_REQUEST_FAILURE: {
      return {
        ...state,
        GET_USER_REQUEST_STATUS: 3,
        GET_USER_REQUEST_ERROR: action.ERROR,
      };
    }
    case $.GET_USER_REQUEST_END: {
      return {
        ...state,
        GET_USER_REQUEST_STATUS: 0,
      };
    }

    
    default:
      return state;
  }
};

export {reducer};
