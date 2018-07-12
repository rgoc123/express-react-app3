import { RECEIVE_SHOWS, RECEIVE_SHOW } from '../actions/showActions';
import merge from 'lodash/merge';

const showsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHOWS:
      return action.shows;
    case RECEIVE_SHOW:
      return {[action.show._id]: {band: action.show.band, location: action.show.location}};
    default:
      return state;
  }

};

export default showsReducer;
