import Header from "./components/Header";
import "./App.css";
import SearchPage from "./components/SearchPage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import cheerio from "cheerio";
import axios from "axios";
import api from "./assets/api.json";

const corsPrefix = "https://cors-anywhere.herokuapp.com/";

function App() {
  const [gifLinks, setGifLinks] = useState([]);

  const generateRandomGif = () => {
    const words = [
      "drifting, bmw, audi, supra, bentley, bugatti, racing, volvo, off road",
    ];

    const rand = Math.floor(Math.random() * words.length);

    let gifUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${api.giphy}&s=${words[rand]}`;

    fetch(gifUrl)
      .then((response) => response.json())
      .then((gifLinks) => {
        setGifLinks(gifLinks.data.images.original.url);
      });
  };

  useEffect(() => {
    generateRandomGif();

    document.title = "CarHunt";
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchPage />
      <div style={{ padding: "20px" }}>
        <img src={gifLinks} alt="gif" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
