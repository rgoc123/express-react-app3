import { connect } from 'react-redux';

import { createShow, editShow } from '../util/shows';

import ShowForm from './showForm';

const mSTP = (state, ownProps) => {



};

const mDTP = (ownProps) => {

  if (ownProps.match.path.includes("createShow")) {
    return {
      submitReview: (review) =>
    }
  }

};

export default withRouter(connect(mSTP, mDTP)(SessionForm));
