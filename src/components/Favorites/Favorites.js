// Favorites.js //

import './Favorites.css';

/// filter out duplicates here

const Favorites = ({ favorites }) => {
  
    const favCards = favorites.map(favorite => {
      return (
        <div className="favorites__container">
          <p className="favorites__quote">{favorite.content}</p>
          <p className="favorites__author">{`- ${favorite.author}`}</p>
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