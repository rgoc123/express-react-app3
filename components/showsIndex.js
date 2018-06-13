import React from 'react';
import ReactDOM from 'react-dom';

class ShowsIndex extends React.Component {

  myFetch() {
    fetch('http://localhost:3000/shows', {
      method: 'GET',
      async: false
    }).then((data) => {
      if (data.ok) {
        data.json().then((newData) => {
          console.log(newData);
          console.log(this);
          this.setState({'shows': newData});
        });
      } else {
        console.log("error");
      }
    });
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
        </li>
      ));
    }
  }

  render() {
    if (this.state.shows.length > 0) {
      console.log(this.state.shows);
      console.log("hey");
      return (
        <div>
          <h1>Shows Index</h1>
          <ul>
            {this.createShowsList()}
          </ul>
        </div>
      );
    }
    return (<div>Loading</div>) ;
  }

  componentDidMount() {
    this.myFetch();
  }

}

export default ShowsIndex;
