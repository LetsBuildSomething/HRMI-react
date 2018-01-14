import {combineReducers} from 'redux';
import videoReducer from './components/video/reducer';

const rootReducer = combineReducers({
  video : videoReducer,
  // can just use 'courses'  -> Shorthand property name
  //authors : authors
});

export default rootReducer;