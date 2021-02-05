import {  CHANGE_STATE_TO_TRUE,  CHANGE_STATE_TO_FALSE, FETCH_COUNTRIES, CHANGE_STATE_MAIN } from './types';
import axios from 'axios';

export const fetchCountries = () => dispatch => {
  axios
    .get(`https://restcountries.eu/rest/v2/all`)
    .then(response =>
      dispatch({
        type: FETCH_COUNTRIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const insertUserInformations = (userInformations) => {
  return {
    type: CHANGE_STATE_MAIN,
    payload: userInformations
  };
};

  export const changeStatesToTrue = (changable) => {
    return {
      type: CHANGE_STATE_TO_TRUE,
      payload: changable,
    };
  };
  export const changeStatesToFalse = (changable) => {
    return {
      type: CHANGE_STATE_TO_FALSE,
      payload: changable,
    };
  };
