import React from 'react';

class MovieCard extends React.Component {
  // Add the addStars method here

  render() {
    const {
      handleFav,
      handleCart,
      addStars,
      minusStars,
      movies,
      movies: data,
    } = this.props;
    // console.log(data);
    const { title, poster, plot, price, rating, stars, fav, cart } = data;

    return (
      <div className='main'>
        <div className='movie-card'>
          <div className='left'>
            <img
              src={poster}
              alt='Poster'
            />
          </div>

          <div className='right'>
            <div className='title'>{title}</div>
            <div className='plot'>{plot}</div>
            <div className='price'>Rs. {price}</div>

            <div className='footer'>
              <div className='rating'>{rating}</div>
              <div className='star-dis'>
                <img
                  src='https://cdn-icons-png.flaticon.com/128/1828/1828779.png'
                  alt='decrease'
                  className='str-btn'
                  onClick={() => {
                    minusStars(movies);
                  }}
                />
                <img
                  src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'
                  alt='star'
                  className='stars'
                />
                <img
                  src='https://cdn-icons-png.flaticon.com/128/10948/10948015.png'
                  alt='increase'
                  className='str-btn'
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span>{stars}</span>
              </div>

              <button
                className={fav ? 'unfavourite-btn' : 'favourite-btn'}
                onClick={handleFav}>
                {fav ? 'UnFavourite' : 'Favourite'}
              </button>

              <button
                className={cart ? 'uncart-btn' : 'cart-btn'}
                onClick={handleCart}>
                {cart ? 'Remove From Cart' : 'Add To Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
