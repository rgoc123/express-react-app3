import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import { fetchShow } from '../util/shows';
// EPIC
import { fetchShow2 } from '../actions/showActions';

class ShowForm extends React.Component {

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
    if (this.props.match.path === '/createShow') {
      this.props.submitShow({
        band: this.state.band,
        location: this.state.location
      }).then(() => this.props.history.push('/shows'));
    } else {
      let showId = this.props.match.params.id;
      this.props.submitShow(showId, {
        band: this.state.band,
        location: this.state.location
      }).then(() => this.props.history.push('/shows'));
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update("band")} value={this.state.band}/>
          <input type="text" onChange={this.update("location")} value={this.state.location}/>
          <input type="submit" value="Submit Show" />
        </form>
      </div>
    );
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      // The below line is for Redux, and illustrates you don't need to
      // access app state to get information
      // this.props.fetchShow(this.props.match.params.id);
      let show;
      fetchShow(this.props.match.params.id).then((res) => {
        show = res;
        this.setState({
          band: show.band,
          location: show.location
        });
      });
    }
    // fetchShow2(this.props.match.params.id);
  }

}

module.exports = ShowForm;
