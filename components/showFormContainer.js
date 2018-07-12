import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShow, createShow, editShow } from '../actions/showActions';

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
      submitShow: (show) => dispatch(createShow(show))
    };
  } else {
    return {
      fetchShow: (showId) => dispatch(fetchShow(showId)),
      submitShow: (showId, show) => dispatch(editShow(showId, show))
    };
  }

};

export default withRouter(connect(mSTP, mDTP)(ShowForm));
