import { 
  FETCH_SMURF_START, 
  FETCH_SMURF_SUCCESS, 
  FETCH_SMURF_FAILURE 
} from '../actions/fetch';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SMURF_START: 
      return {
        ...state,
        fetchingSmurfs: true
      };

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [
          ...state.smurfs, ...action.payload
        ],
        fetchingSmurfs: false
      };

    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        addingSmurfs: true
      };
      

    default:
      return state;
  }
}