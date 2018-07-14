import { ofType } from 'redux-observable';
import { filter, mapTo, mergeMap } from 'rxjs/operators';

import * as APIShows from '../util/shows';

export const RECEIVE_SHOWS = 'RECEIVE_SHOWS';
export const RECEIVE_SHOW = 'RECEIVE_SHOW';


// ASYNC ACTIONS
export const receiveShows = shows => {
  return {
    type: RECEIVE_SHOWS,
    shows
  };
};

export const receiveShow = show => {
  return {
    type: RECEIVE_SHOW,
    show
  };
};

// EPIC
const fetchShowEpic = action => action.pipe(
  ofType(RECEIVE_SHOW),
  mergeMap(action =>
    $.ajax({
      url: `/shows/${action.show.id}`,
      method: 'GET'
    }).pipe(
      map(response => {
        console.log(response);
        fetchShow(response);
      })
    )
  )
);

// THUNK ACTIONS
export const fetchShows = () => dispatch => {
  return (
    APIShows.fetchShows().then(shows => dispatch(receiveShows(shows)))
  );
};

export const fetchShow = (showId) => dispatch => {
  return (
    APIShows.fetchShow(showId).then(show => dispatch(receiveShow(show)))
  );
};

export const fetchShow2 = (showId) => dispatch => {
  return (
    APIShows.fetchShow(showId).then(show => dispatch(receiveShow(show)))
  );
};

export const createShow = (show) => dispatch => {
  return (
    APIShows.createShow(show)
  );
};

export const editShow = (showId, show) => dispatch => {
  return (
    APIShows.editShow(showId, show)
  );
};
