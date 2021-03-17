import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static contextType = UserContext;

  render() {
    return (
      <UserContext.Consumer>
        {(UserContext) => (
          <div>
            <h1>
              {UserContext.currentUser ? UserContext.currentUser.name : ""}'s
              Movie List <MovieRow />
            </h1>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
