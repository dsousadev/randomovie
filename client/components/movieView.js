import React from 'react';

const MovieView = (props) => {
  if (props.currentMovie.Title) {
    return (
      <div>
        <h2>{props.currentMovie.Title}</h2>
        <img src={props.currentMovie.Poster} />
        <ul>
          <li>{props.currentMovie.Year}</li>
          <li>{props.currentMovie.Actors}</li>
          <li>{props.currentMovie.Genre}</li>
          <li>{props.currentMovie.Plot}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}

export default MovieView;
