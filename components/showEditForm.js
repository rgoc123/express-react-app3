import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import { editShow } from '../util/shows';

class ShowEditForm extends React.Component {

  constructor() {
    super();
    this.state = {
      band: "",
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let showId = this.props.location.pathname.slice(7);
    editShow(showId, {
      band: this.state.band,
      location: this.state.location
    });
    this.props.history.push('/shows');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update("band")}/>
          <input type="text" onChange={this.update("location")}/>
          <input type="submit" value="Edit Show" />
        </form>
      </div>
    );
  }

}

module.exports = ShowEditForm;
