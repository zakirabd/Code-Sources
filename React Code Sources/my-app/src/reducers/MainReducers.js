import {CHANGE_STATE_TO_TRUE, CHANGE_STATE_TO_FALSE, FETCH_COUNTRIES, CHANGE_STATE_MAIN} from '../actions/types'; 
  import initialState from './initialState';
  import update from 'react-addons-update';
  
  let sg,groups,size;
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
      case CHANGE_STATE_MAIN:
        sg = action.payload.name.includes('.');
       if(sg !==true){
         return update(state, { 
           [action.payload.name]: {$set: action.payload.value }
         })
       }else{
          groups = action.payload.name.split('.');
          size = groups.length - 1;
         if(size === 1){
           return update(state, { 
             [ groups[0]]: { 
               [ groups[1]]: {$set: action.payload.value }
             }
           })
         }
       }
       break;
      
      
      default:
        return state;
    }
  }  