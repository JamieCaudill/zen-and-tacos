// Favorites.js //

import './Favorites.css';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';

/// filter out duplicates here

const Favorites = ({ favorites, handleFavorite }) => {
      
    const favCards = favorites.map(favorite => {
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
        {!favorites.length && <p className="favorites__message">You have no favorites yet. Click the heart on a quote to add it to your favorites.</p>}
      </section>
    )
}

export default Favorites;