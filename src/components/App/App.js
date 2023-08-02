import './App.css';
import Header from '../Header/Header';
import { getRandomQuote } from '../../apiCalls';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from '../Card/Card';
import Error from '../Error/Error';

function App() {

  const [quote, setQuote] = useState({})
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')
  
  useEffect(() => {
    getRandomQuote()
      .then(data => setQuote(data))
      .catch(error => setError(`Sorry, something went wrong. Please try again later.`))
      console.log(error)
  }, [])
 
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element ={
          <Card quote={quote} 
            setQuote={setQuote} 
            getRandomQuote={getRandomQuote}
            favorites={favorites}
            setFavorites={setFavorites}
            error={error}
          />}
          />
        <Route path='/error' element={<Error />} />
      </Routes>
    </main>
  )
}

export default App;