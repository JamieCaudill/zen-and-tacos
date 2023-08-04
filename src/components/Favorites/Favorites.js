// Favorites.js //

import './Favorites.css';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
import PropTypes from 'prop-types';

const Favorites = ({ favorites, handleFavorite }) => {
      
    const favCards = favorites.map(favorite => {
      return (
        <div className="favorites__container" key={favorite._id}>
          <p className="favorites__quote">{favorite.quote}</p>
          <p className="favorites__author">{`- ${favorite.author}`}</p>
          <ToggleFavorite quote={favorite} handleFavorite={handleFavorite} />
        </div>
      )
    })
  
    return (
      <section className="favorites">
        <h2 className="favorites__title">Favorites</h2>
        {!favorites.length || <p>Click the heart to remove from favorites.</p>}
        {favCards}
        {!favorites.length && <p className="favorites__message">You have no favorites yet. Click the heart on a quote to add it to your favorites.</p>}
      </section>
    )
}

export default Favorites;

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  handleFavorite: PropTypes.func.isRequired
}