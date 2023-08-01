import './App.css';
import Header from '../Header/Header';
import { getRandomQuote } from '../../apiCalls';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

function App() {

  const [quote, setQuote] = useState({})
  
  useEffect(() => {
    getRandomQuote()
      .then(data => setQuote(data))
  }, [])

  return (
    <main className="app">
      <Header />
      <Card quote={quote} setQuote={setQuote} getRandomQuote={getRandomQuote} />
    </main>
  )
}

export default App;