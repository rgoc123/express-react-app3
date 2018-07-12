import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import { fetchShows } from '../actions/showActions';

const mDTP = dispatch => {
  return {
    fetchShows: () => dispatch(fetchShows())
  };
}

class ShowsIndex extends React.Component {

  editShow(id) {
    this.props.history.push(`/shows/${id}`);
  }

  deleteShow(id) {
    return fetch(`/shows/${id}`, {
      method: 'DELETE'
    }).then(this.getShowsIndex());
  }

  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };
  }

  createShowsList() {
    if (this.state.shows) {
      return this.state.shows.map(show => (
        <li key={show._id}>
          <span>{show.band}</span>
          <span>{show.location}</span>
          <button onClick={() => this.editShow(show._id)}>Edit</button>
          <button onClick={() => this.deleteShow(show._id)}>Delete</button>
        </li>
      ));
    }
  }

  render() {
    if (this.state.shows.length > 0) {
      return (
        <div>
          <h1>Shows Index</h1>
          <Link to="/createShow">Create a New Show!</Link>
          <ul>
            {this.createShowsList()}
          </ul>
        </div>
      );
    }
    return (<div>Loading</div>) ;
  }

  componentDidMount() {
    this.props.fetchShows().then((response) => {
      this.setState({
        shows: response.shows
      });
    });
  }

}

export default connect(null, mDTP)(ShowsIndex);
