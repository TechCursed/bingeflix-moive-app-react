import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=901abbe5020bba05ab7d38f0087a095c";
  // const [movies, setmovies] = useState([]);

  // FUNCTION TO FETCH THE DATA FROM THE API

  const getMovies = async () => {

    try {

      const data = await axios.get(API_URL);
      console.log(data);
      
    } catch (error) {
      
    }

  }
  
  //CALLS THE FUNCTION ONLY ONCE WHEN THE PAGE RELOADS
  useEffect(() => {

    getMovies();

  }, [])
  


  return (
    <div className="App">
      <h1>BingeFlix </h1>
      
    </div>
  );
}

export default App;
