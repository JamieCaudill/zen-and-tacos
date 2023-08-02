// ToggleFavorite //
import './ToggleFavorite.css'

const ToggleFavorite = ({quote, handleFavorite}) => {

  if (quote.isFavorite) {
    return (
      <button className="card__favorite" onClick={handleFavorite}>❤️</button>
    ) 
  } else { 
    return (
      <button className="card__favorite" onClick={handleFavorite}>🤍</button>
    )
  }
}

export default ToggleFavorite;