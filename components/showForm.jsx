import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

class ShowForm extends React.Component {

  constructor(props) {
    super(props);
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
          <input type="text" onChange={this.update("band")}/>
          <input type="text" onChange={this.update("location")}/>
          <input type="submit" value="Submit Show" />
        </form>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.fetchShow) this.props.fetchShow(this.props.match.params.id);
  }

}

module.exports = ShowForm;
