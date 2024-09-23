import Header from "./components/Header";
import "./App.css";
import SearchPage from "./components/SearchPage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

const apiKey = import.meta.env.VITE_APP_GIPHY_API;

function App() {
  const [movingPic, setMovingPic] = useState([]);
  const words = [
    "drifting, bmw, audi, supra, bentley, bugatti, racing, volvo, off road",
  ];

  const generateRandomGif = () => {
    const randomIndex = Math.floor(Math.random() * words.length);

    const gifUrl = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${words[randomIndex]}`;

    fetch(gifUrl)
      .then((response) => response.json())
      .then((gifUrl) => {
        setMovingPic(gifUrl.data.images.original.url);
      });
  };

  useEffect(() => {
    generateRandomGif();
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchPage />
      <div style={{ paddingBlockEnd: "2rem" }}>
        <img style={{ margin: "2rem" }} src={movingPic} alt="gif" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
