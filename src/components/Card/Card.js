// Card.js //

import './Card.css';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';

const Card = ({ quote, setQuote, getRandomQuote, favorites, setFavorites }) => {

  const handleClick = () => {
    getRandomQuote()
      .then(data => {
        console.log(data) 
        setQuote({...data, isFavorite: false})
      })
  }

  return (
    <section className="card">
      <div className="card__container">
        <p className="card__quote">{quote.content}</p>
        <p className="card__author">{`- ${quote.author}`}</p>
        <ToggleFavorite quote={quote} setQuote={setQuote} favorites={favorites} setFavorites={setFavorites} />
      </div>
      <button className="card__button" onClick={handleClick}>🌮</button>
    </section>
  )
}

export default Card;