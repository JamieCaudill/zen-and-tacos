// Card.js //

import './Card.css';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
import Error from '../Error/Error';

const Card = ({ quote, handleClick, handleFavorite, error }) => {

  if (error) {
    return (
      <Error />
    )}

  return (
    <section className="card">
      <div className="card__container">
        <p className="card__quote">{quote.content}</p>
        <p className="card__author">{`- ${quote.author}`}</p>
        <ToggleFavorite quote={quote} handleFavorite={handleFavorite} />
      </div>
      <button className="card__button" onClick={handleClick}>🌮</button>
    </section>
  )
}

export default Card;