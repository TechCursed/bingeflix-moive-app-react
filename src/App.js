import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './components/MovieCard';

function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=901abbe5020bba05ab7d38f0087a095c";
  const [movies, setmovies] = useState([]);

  // FUNCTION TO FETCH THE DATA FROM THE API

  const getMovies = async () => {

    try {

      // {data} destructures the array

      const {data} = await axios.get(API_URL);
      setmovies(data.results);
      console.log(data.results);
      
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
      
      <div className='movies'>
      {
        movies && movies.length>0  && movies.map(movie => <MovieCard  key={movie.id} movie = {movie}/>)
      }
      </div>
            
    </div>
  );
}

export default App;
