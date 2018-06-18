import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import createShows from '../util/shows';

class ShowCreateForm extends React.Component {
  constructor() {
    super();
    this.state = {
      band: "",
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // //this.createShows = createShows;
    // this.createShows = this.createShows.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  createShow(show) {
    return fetch('/createShow', {
      method: 'POST',
      body: JSON.stringify(show),
      headers: {
        'content-type': 'application/json'
      }
    }).then(() => this.props.history.push('/shows')); 

    //.then(response => response.json());
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createShow({
      band: this.state.band,
      location: this.state.location
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update("band")}/>
          <input type="text" onChange={this.update("location")}/>
          <input type="submit" value="Create Show" />
        </form>
      </div>
    );
  }
}

module.exports = ShowCreateForm;
