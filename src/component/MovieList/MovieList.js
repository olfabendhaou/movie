import React from 'react'
import Moviecard from '/Users/olfabendhaou/movie/src/component/MovieCard/Moviecard.js';
import './MovieList.css'

const MovieList = ({movies,imputSearch}) => { 
  return (
    <div className='movielist'>
            {movies.filter(movie => movie.title.toUpperCase().includes(imputSearch.toUpperCase()))
          .map(movie=> (
          <Moviecard   movie={movie} key={movie.id}/>
        ))}
    </div>
  );
};

export default MovieList
