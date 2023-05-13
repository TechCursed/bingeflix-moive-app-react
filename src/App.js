import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import LoadingSpinnerComponent from 'react-spinners-components';



function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=901abbe5020bba05ab7d38f0087a095c&language=en-US&page=1";
  // const API_TRENDING = "https://api.themoviedb.org/3/trending/all/day?api_key=901abbe5020bba05ab7d38f0087a095c";
  // const API_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=901abbe5020bba05ab7d38f0087a095c&language=en-US&page=1";
  // const API_TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=901abbe5020bba05ab7d38f0087a095c&language=en-US&page=1";
  // let API_URL_Search = "https://api.themoviedb.org/3/search/movie?api_key=901abbe5020bba05ab7d38f0087a095c&query=";
  
  const [movies, setmovies] = useState([]);
  const [isloading, setisloading] = useState("true");

  // FUNCTION TO FETCH THE DATA FROM THE API
  const getMovies = async () => {

    try {
      // {data} destructures the array
      const {data} = await axios.get(API_URL);
      setmovies(data.results);
      setisloading("false");
      console.log(data.results);
      
    } catch (error) {
      
    }

  }
  
  //CALLS THE FUNCTION ONLY ONCE WHEN THE PAGE RELOADS
  useEffect(() => {

    getMovies(); 

  }, [])
  


  if(isloading==="true")
  {
    return(
      <div className='loading'>
    <LoadingSpinnerComponent type={ 'Ripple' } colors={ [ '#06628d', '#03C988'] } size={ '150px' } />
      </div>
  )
  }

  return (
    <div className="App">
      <div className='header'>
      <h1>Binge Flix 📽️</h1>       
      <form>
        <input type='text' placeholder='Search by Movies/Actors/Director' className='input-form' ></input>
      </form>

      </div>

      <div className='movies'>
      {
        movies && movies.length>0  && movies.map(movie => <MovieCard  key={movie.id} movie = {movie}/>)
      }
      </div>
            
    </div>
  );
}

export default App;
