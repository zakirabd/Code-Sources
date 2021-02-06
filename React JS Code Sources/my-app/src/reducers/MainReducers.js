import {CHANGE_STATE_TO_TRUE, CHANGE_STATE_TO_FALSE, FETCH_COUNTRIES, INSERT_USER_INFO} from '../actions/types'; 
  import initialState from './initialState';
  
  export default function(state = initialState, action) {
    switch (action.type) {
      
      case CHANGE_STATE_TO_TRUE:
        if([action.payload.name]){
        return {
          ...state,
          [action.payload.name]: true,
          loading: false
        };
      }
      case CHANGE_STATE_TO_FALSE:
        if([action.payload.name]){
          return {
          ...state,
          [action.payload.name]: false,
          loading: false
        };
      }
      case FETCH_COUNTRIES:
        return {
        ...state,
        countries: action.payload,
        loading: false
      };
      case INSERT_USER_INFO:
         if([action.payload.name]){
           return {
            ...state,
            [action.payload.name]: [action.payload.value],
            loading: false
           }
         }
       break;
      default:
        return state;
    }
  }  