import React, { Component } from "react";

class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comicName: null
    };
  }

  updateComicName = name => {
    this.setState({
      comicName: name
    });
  };

  render() {
    return <div></div>;
  }
}

export default MovieSearch;
