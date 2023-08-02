import './App.css';
import Header from '../Header/Header';
import { getRandomQuote } from '../../apiCalls';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from '../Card/Card';
import Error from '../Error/Error';
import Favorites from '../Favorites/Favorites';

function App() {

  const [quote, setQuote] = useState({})
  const [favorites, setFavorites] = useState([])
  const [selectedQuote, setSelectedQuote] = useState({})
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

  const handleFavorite = (event) => { 
    const target = event.target.id;
    if (quote._id === target && !quote.isFavorite) {
      setQuote((prevQuote) => ({...prevQuote, isFavorite: true}))
      setFavorites((prevFavorites) => [...prevFavorites, {...quote, isFavorite: true}])
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
      </Routes>
    </main>
  )
}

export default App;