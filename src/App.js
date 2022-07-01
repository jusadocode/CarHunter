import Header from './components/Header';
import './App.css'
import SearchPage from './components/SearchPage';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

function App() {

  const [gifLinks, setGifLinks] = useState([])

  useEffect(() => {

    const words = ["drifting, bmw, audi, supra"]

    const rand = Math.floor(Math.random() * words.length)

    let url = `https://api.giphy.com/v1/gifs/translate?api_key=aKv46tBfTkitxlFBtNc7XQ7ukaK8wmu7&s=${words[rand]}`;

    fetch(url)
      .then(response => response.json()).then(gifLinks => {
        setGifLinks(gifLinks.data.images.original.url)
      })
  }, [])

  return (
    <div className='App' >
      <Header />
      <SearchPage />
      <div style={{ padding: '20px' }}>
        <img src={gifLinks} alt='gif' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
