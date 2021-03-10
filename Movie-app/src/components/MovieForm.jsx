import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params.div}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.pushState("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
