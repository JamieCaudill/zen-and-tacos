// Card.js //

import './Card.css';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types';

const Card = ({ quote, handleClick, handleFavorite, error }) => {

  if (error) {
    return (
      <Error />
    )}

  return (
    <section className="card">
      <div className="card__container">
        {!quote.quote && <Loading />}
        <p className="card__quote">{quote.quote}</p>
        {quote.quote && <p className="card__author">{`- ${quote.author}`}</p>}
        <ToggleFavorite quote={quote} handleFavorite={handleFavorite} />
      </div>
      {quote.isFavorite && <p className="card__message">Saved to favorites!</p>}
      <img className="card__button" onClick={handleClick} src={require('../../images/taco.png')} alt="taco"/>
    </section>
  )
}

export default Card;

Card.propTypes = {
  quote: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  error: PropTypes.string
}