import {  CHANGE_STATE_TO_TRUE,  CHANGE_STATE_TO_FALSE, FETCH_COUNTRIES, INSERT_USER_INFO } from './types';
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
  console.log(userInformations)
  return {
    type: INSERT_USER_INFO,
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
