// NotFound.js //

import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found">
      <h2 className="not-found__text">404: Page Not Found</h2>
      <button className="not-found__button" onClick={() => window.history.back()}>Go Back</button>
    </section>
  )
}

export default NotFound;