// Loading.js //

import loadingIcon from './Spinner-1s-200px.svg'
import './Loading.css'

const Loading = () => {
  return (
    <section className="loading">
      <img className="loading__icon" src={loadingIcon} alt="loading" />
    </section>
  )
}

export default Loading;