import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export function fetchSmurfs() {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_START });

    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log('Response', response)
        dispatch({ 
          type: FETCH_SMURF_SUCCESS, 
          payload: response.data 
        })
      })
      .catch(error => {
        console.log('Error', error)
        dispatch({ 
          type: FETCH_SMURF_FAILURE, 
          payload: error 
        })
      })
  }
}