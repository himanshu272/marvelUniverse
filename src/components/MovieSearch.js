import React, { Component } from "react";

class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieName: null
    };
  }

  updateMovieName = name => {
    this.setState({
      movieName: name
    });
  };

  render() {
    return <div></div>;
  }
}

export default MovieSearch;
