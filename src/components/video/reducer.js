import * as types from './action';
import initialState from '../../initialState';

export default function videoReducer(state = initialState.sampleNumber, action) {
  
  console.log(state);

  switch(action.type) {
    case types.ACTION_SAMPLE:
      return action.number;
    default:
      return state;
  }
}