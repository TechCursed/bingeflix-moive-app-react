import React from 'react';
import './MovieCard.css';

function MovieCard({movie}) {

//   easy way for prop destructuring
  const{title,vote_average,release_date,backdrop_path } = movie;

  const imgBaseUrl = "https://image.tmdb.org/t/p/original";

  return (

    <div className='card-container'>

        <div className='image-container'>
          <img src= {imgBaseUrl+backdrop_path} alt='movie-poster' className='movie-img'></img>
        </div>

        <div className='details'>
        <div>
            <span className='title'> {title} </span>
        </div>

        <div>
            <span className='genere'>Rating : ⭐ {vote_average}</span>
        </div>

        <div className='rating'>
            <span>Released : {release_date}</span>
            {/* <span>Popularity : {popularity}</span> */}
        </div>

        {/* <div>
          <span>{overview}</span>

        </div> */}
        </div>


    </div>
  )
}

export default MovieCard