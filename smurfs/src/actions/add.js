export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';

export function addSmurf() {
  return {
    type: UPDATE_SMURF
  };
}

export function updateSmurf(smurf) {
  return {
    type: UPDATE_SMURF,
    payload: smurf
  };
}