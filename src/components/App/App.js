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

  const handleClick = () => {
    getRandomQuote()
      .then(data => {
        console.log(data) 
        setQuote({...data, isFavorite: false})
      })
  }

  const handleFavorite = () => { 
    if (quote.isFavorite) {
      setQuote({...quote, isFavorite: false})
    } else {
      setFavorites([...favorites, quote])
      setQuote({...quote, isFavorite: true})    
    }
  }
 
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element ={
          <Card quote={quote} 
            handleClick={handleClick}
            favorites={favorites}
            handleFavorite={handleFavorite}
            error={error}
          />}
          />
        <Route path='/error' element={<Error />} />
      </Routes>
    </main>
  )
}

export default App;