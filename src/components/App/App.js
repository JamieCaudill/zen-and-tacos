/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Header from '../Header/Header';
import { getRandomQuote } from '../../apiCalls';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from '../Card/Card';
import Favorites from '../Favorites/Favorites';
import NotFound from '../NotFound/NotFound';


const App = () => {

  const [quote, setQuote] = useState({})
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')
  
  useEffect(() => {
    getRandomQuote()
      .then(data => setQuote({...data, _id: Date.now(), isFavorite: false}))
      .catch(error => setError(`Sorry, something went wrong. Please try again later.`))
      console.log(error)
  }, [])

  const handleClick = () => {
    getRandomQuote()
      .then(data => {
        setQuote({...data, _id: Date.now(), isFavorite: false})
      })
  }

  const handleFavorite = (event) => { 

    const target = parseInt(event.target.id);
    console.log(typeof target)
    console.log(quote._id)
    if (quote._id === target && !quote.isFavorite) {
      setQuote((prevQuote) => ({...prevQuote, isFavorite: true}))
      setFavorites((prevFavorites) => [...prevFavorites, {...quote, isFavorite: true, _id: Date.now()}])
    } else if (quote._id === target && quote.isFavorite) {
      return;
    } else {
      const filteredFavorites = favorites.filter(favorite => favorite._id !== target)
      setFavorites(filteredFavorites)
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
        <Route path="/favorites" element={<Favorites handleFavorite={handleFavorite} favorites={favorites} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App;