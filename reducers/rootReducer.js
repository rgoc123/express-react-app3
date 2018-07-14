import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import shows from './showsReducer';
import { fetchShow2 } from '../actions/showActions';

export const rootEpic = combineEpics(
  fetchShow2
);

export default combineReducers({
  shows
});
