// Favorites.js //

import './Favorites.css';

/// filter out duplicates here

const Favorites = ({ favorites }) => {
  
    const favCards = favorites.map(favorite => {
      return (
        <section className="card">
          <div className="card__container">
            <p className="card__quote">{favorite.content}</p>
            <p className="card__author">{`- ${favorite.author}`}</p>
          </div>
        </section>
      )
    })
  
    return (
      <section className="favorites">
        <h2 className="favorites__title">Favorites</h2>
        {favCards}
      </section>
    )
}