import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import LoadingSpinnerComponent from 'react-spinners-components';



function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=901abbe5020bba05ab7d38f0087a095c&language=en-US&page=1";
  const API_TRENDING = "https://api.themoviedb.org/3/trending/all/day?api_key=901abbe5020bba05ab7d38f0087a095c";
  const API_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=901abbe5020bba05ab7d38f0087a095c&language=en-US&page=1";
  const API_TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated?api_key=901abbe5020bba05ab7d38f0087a095c&language=en-US&page=1";
  let API_URL_Search = "https://api.themoviedb.org/3/search/movie?api_key=901abbe5020bba05ab7d38f0087a095c&query=";


  //holds the data of movies for different API calls
  const [movies, setmovies] = useState([]);
  // state of loading 
  const [isloading, setisloading] = useState("true");
  //holds the search query 
  const [query, setquery] = useState('');

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
  

  // for displaying the loading information until API results are fetched
  if(isloading==="true")
  {
    return(
      <div className='loading'>
      <LoadingSpinnerComponent type={ 'Ripple' } colors={ [ '#06628d', '#03C988'] } size={ '150px' } />
      </div>
  )
  }

  //to handle the search functionality
  const handleSearch = async (e) => {
  
    e.preventDefault();

    // console.log(API_URL_Search+query);

    try {
    
      //new API call with search query replacing the previous API call
      const {data} = await axios.get(API_URL_Search+query);

      //setting the movie state to searched results data
      setmovies(data.results);   
    } catch (error) {
 
    }
  }

    //RETURNS THE TRENDING MOVIES
    const getTrending = async () => {
  
      try {
      
        //new API call with TRENDING MOVIES
        const {data} = await axios.get(API_TRENDING);
  
        //SETS THE MOVIES STATE TO TRENDING MOVIES
        setmovies(data.results);
      
      } catch (error) {
   
      }
    }

        //RETURNS THE TOP RATED MOVIES
        const getTopRated = async () => {
  
          try {
            //new API call with TOP RATED MOVIES
            const {data} = await axios.get(API_TOP_RATED);
      
            //SETS THE MOVIES STATE TO TOP RATED MOVIES
            setmovies(data.results);
          
          } catch (error) {
       
          }
        }

        //RETURNS THE TOP POPULAR MOVIES
        const getPopular = async () => {
  
          try {
            //new API call with TOP POPULAR MOVIES
            const {data} = await axios.get(API_POPULAR);
      
            //SETS THE MOVIES STATE TOP POPULAR MOVIES MOVIES
            setmovies(data.results);
          
          } catch (error) {
       
          }
        }


  return (
    <div className="App">

      <div className='header'>
      <h1>📽️ Binge Flix 📽️</h1>  

      <form onSubmit={handleSearch}>  
        <input type='text' placeholder='Search by Movies/Actors/Director' className='input-form' onChange={(e) => setquery(e.target.value)} ></input>
      </form>     

     <div className='btn-grp'>
        <button onClick={getTopRated} className='btn-all'>Top Rated</button>
        <button onClick={getTrending} className='btn-all'>Trending</button>
        <button onClick={getPopular} className='btn-all'>Popular</button>
      </div>

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
