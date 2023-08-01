import './App.css';
import Header from '../Header/Header';
import { getRandomQuote } from '../../apiCalls';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <Header />
  )
}

export default App;