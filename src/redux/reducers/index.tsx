import {combineReducers} from 'redux';
import mainReducer from './mainReducer';

const rootRducer = combineReducers({
  mainReducer,
});

export type RootState = ReturnType<typeof rootRducer>;

export default rootRducer;