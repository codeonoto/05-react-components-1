import React from 'react';
import MovieCard from './Moviecard';

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Avengers Endgame',
      plot: 'The Avengers Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut a laudantium.',
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false,
      cart: false,
    };
  }
  render() {
    return (
      <>
        <MovieCard movie={this.state} />
      </>
    );
  }
}

export default MovieList;
