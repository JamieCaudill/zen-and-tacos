// ToggleFavorite //
import './ToggleFavorite.css'
import PropTypes from 'prop-types';

const ToggleFavorite = ({quote, handleFavorite}) => {

  if (quote.isFavorite) {
    return (
      <button className="card__favorite" id={quote._id} onClick={handleFavorite}>❤️</button>
    ) 
  } else { 
    return (
      <button className="card__favorite" id={quote._id} onClick={handleFavorite}>🤍</button>
    )
  }
}

export default ToggleFavorite;

ToggleFavorite.propTypes = {
  quote: PropTypes.object.isRequired,
  handleFavorite: PropTypes.func.isRequired
}