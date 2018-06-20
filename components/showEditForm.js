import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

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

  editShow(showId, show) {
    return fetch(`/shows/${showId}`, {
      method: 'PUT',
      body: JSON.stringify(show),
      headers: {
        'content-type': 'application/json'
      }
    }).then(() => this.props.history.push('/shows'));
  }

  handleSubmit(e) {
    e.preventDefault();
    let showId = this.props.location.pathname.slice(7);
    this.editShow(showId, {
      band: this.state.band,
      location: this.state.location
    });
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
