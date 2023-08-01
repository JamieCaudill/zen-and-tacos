// Card.js //

import './Card.css';

const Card = ({ quote }) => {
  return (
    <section className="card">
      <div className="card__container">
        <p className="card__quote">{quote.content}</p>
        <p className="card__author">{`- ${quote.author}`}</p>
        <button className="card__button">🌮</button>
      </div>
    </section>
  )
}

export default Card;