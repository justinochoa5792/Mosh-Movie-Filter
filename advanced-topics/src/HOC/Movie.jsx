import React, { Component } from "react";
import withToolTip from "./withToolTip";

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>Movie</h1>
        {this.props.showTooltip && <div>Some tooltip</div>}
      </div>
    );
  }
}

export default withToolTip(Movie);
