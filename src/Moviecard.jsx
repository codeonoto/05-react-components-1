import React from 'react';

class MovieCard extends React.Component {
  // Add the addStars method here
  addStars() {
    if (this.state.stars >= 5) {
      return;
    }
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  }

  //
  minusStars() {
    if (this.state.stars > 0) {
      this.setState((prevState) => {
        return {
          stars: prevState.stars - 0.5,
        };
      });
    }
  }

  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  handleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  };

  render() {
    console.log(this.props);
    const { movie: data } = this.props;
    console.log(data);
    const { title, plot, price, rating, stars, fav, cart } = data;

    return (
      <div className='main'>
        <div className='movie-card'>
          <div className='left'>
            <img
              src='https://rukminim2.flixcart.com/image/850/1000/jxhv1jk0/poster/c/x/v/medium-thor-avengers-endgame-new-poster-for-room-office-endgame-original-imafgyfefdnvuvjh.jpeg?q=90&crop=false'
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
                  onClick={this.minusStars.bind(this)}
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
                  onClick={this.addStars.bind(this)}
                />
                <span>{stars}</span>
              </div>
              {/* {fav ? (
                <button
                  className='unfavourite-btn'
                  onClick={this.handleFav}>
                  UnFavourite
                </button>
              ) : (
                <button
                  className='favourite-btn'
                  onClick={this.handleFav}>
                  Favourite
                </button>
              )} */}
              <button
                className={fav ? 'unfavourite-btn' : 'favourite-btn'}
                onClick={this.handleFav}>
                {fav ? 'UnFavourite' : 'Favourite'}
              </button>

              <button
                className={cart ? 'uncart-btn' : 'cart-btn'}
                onClick={this.handleCart}>
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
