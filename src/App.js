import Header from './components/Header';
import './App.css'
import SearchPage from './components/SearchPage';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import cheerio from 'cheerio';
import axios from 'axios';



const corsPrefix = 'https://cors-anywhere.herokuapp.com/'


function App() {

  const [gifLinks, setGifLinks] = useState([])

  const generateRandomGif = () => {

    const words = ["drifting, bmw, audi, supra"]

    const rand = Math.floor(Math.random() * words.length)

    let gifUrl = `https://api.giphy.com/v1/gifs/translate?api_key=aKv46tBfTkitxlFBtNc7XQ7ukaK8wmu7&s=${words[rand]}`;

    fetch(gifUrl)
      .then(response => response.json()).then(gifLinks => {
        setGifLinks(gifLinks.data.images.original.url)
      })
  }

  const parseSiteHtml = () => {

    let titles = []

    axios(`${corsPrefix}autoplius.lt`)
      .then(html => {
        const htmlData = html.data

        const $ = cheerio.load(htmlData)

        $('.body-description-line1', htmlData).each((index, element) => {
          const title = $(element).text()
          titles.push(title)

        })


        console.log(titles)
      })
      .catch(console.error())


  }

  useEffect(() => {

    generateRandomGif()

    //parseSiteHtml()

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
