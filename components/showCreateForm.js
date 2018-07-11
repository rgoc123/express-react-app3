import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import { createShow } from '../util/shows';

class ShowCreateForm extends React.Component {
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
    createShow({
      band: this.state.band,
      location: this.state.location
    });
    this.props.history.push('/shows');
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
