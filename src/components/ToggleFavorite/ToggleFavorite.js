// ToggleFavorite //
import { useEffect, useState } from 'react';
import './ToggleFavorite.css'

const ToggleFavorite = ({quote, setQuote, favorites, setFavorites}) => {

  const handleFavorite = () => { 
    if (quote.isFavorite) {

      setQuote({...quote, isFavorite: false})
    } else {
      setFavorites([...favorites, quote])
      setQuote({...quote, isFavorite: true})    
    }
  }

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