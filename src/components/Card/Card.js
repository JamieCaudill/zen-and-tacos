// Card.js //

import './Card.css';

const Card = ({ quote, setQuote, getRandomQuote }) => {
  const handleClick = () => {
    getRandomQuote()
      .then(data => setQuote(data))
  }
  return (
    <section className="card">
      <div className="card__container">
        <p className="card__quote">{quote.content}</p>
        <p className="card__author">{`- ${quote.author}`}</p>
      </div>
      <button className="card__button" onClick={handleClick}>🌮</button>
    </section>
  )
}

export default Card;