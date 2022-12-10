import React from 'react'

function MovieList(props) {
    const movieClicked = movie => evt =>{
        props.movieClicked(movie)
    }


  return (
    <div className='movie-list '>
        {props.movies && props.movies.map(movie =>{
            return<div key={movie.id}>
                <h2 onClick={movieClicked(movie)}>
                    {movie.title}
                </h2>
            </div>
        })}  
    </div>
  )
}

export default MovieList ;
