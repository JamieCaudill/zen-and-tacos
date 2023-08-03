// Card.js //

import './Card.css';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const Card = ({ quote, handleClick, handleFavorite, error }) => {

  if (error) {
    return (
      <Error />
    )}

  return (
    <section className="card">
      <div className="card__container">
        {!quote.content && <Loading />}
        <p className="card__quote">{quote.content}</p>
        {quote.content && <p className="card__author">{`- ${quote.author}`}</p>}
        <ToggleFavorite quote={quote} handleFavorite={handleFavorite} />
      </div>
      {quote.isFavorite && <p className="card__message">Saved to favorites!</p>}
      <button className="card__button" onClick={handleClick}>🌮</button>
    </section>
  )
}

export default Card;