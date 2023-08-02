// Favorites.js //

import './Favorites.css';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';

/// filter out duplicates here

const Favorites = ({ favorites, handleFavorite }) => {
  
    const favCards = favorites.map(favorite => {
      console.log(favorite.isFavorite)
      return (
        <div className="favorites__container" key={favorite._id}>
          <p className="favorites__quote">{favorite.content}</p>
          <p className="favorites__author">{`- ${favorite.author}`}</p>
          <ToggleFavorite quote={favorite} handleFavorite={handleFavorite} />
        </div>
      )
    })
  
    return (
      <section className="favorites">
        <h2 className="favorites__title">Favorites</h2>
        {favCards}
      </section>
    )
}

export default Favorites;