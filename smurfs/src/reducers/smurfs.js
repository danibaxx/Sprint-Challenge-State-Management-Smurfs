import { 
  FETCH_SMURF_START, 
  FETCH_SMURF_SUCCESS, 
  FETCH_SMURF_FAILURE 
} from '../actions/fetch';

const initialState = {
  smurfs: {
    name: '',
    age: '',
    height: ''
  },
  fetchSmurfs: false,
  addSmurfs: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SMURF_START: 
      return {
        ...state,
        fetchSmurfs: true
      };

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [
          ...state.smurfs, 
          ...action.payload
        ],
        fetchSmurfs: false
      };

    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        addSmurfs: true
      };
      

    default:
      return state;
  }
}