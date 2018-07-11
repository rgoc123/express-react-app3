import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShow, createShow, editShow } from '../util/shows';

import ShowForm from './showForm';

const mSTP = (state, ownProps) => {

  if (ownProps.match.path === '/createShow') {

    return {
      formType: "new"
    };
  } else {
    return {
      formType: "edit"
    };
  }

};

const mDTP = (dispatch, ownProps) => {

  if (ownProps.match.path.includes("createShow")) {
    return {
      submitShow: (show) => createShow(show)
    };
  } else {
    return {
      fetchShow: (showId) => fetchShow(showId),
      submitShow: (showId, show) => editShow(showId, show)
    };
  }

};

export default withRouter(connect(mDTP)(ShowForm));
