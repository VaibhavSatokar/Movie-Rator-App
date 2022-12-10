import React from 'react'

function MovieDetails(props) {
  return (
    <div className='movie-details'>
        {props.movies && props.movies.map(movie =>{
            return <div>
                <div key={movie.id}>{movie.title}</div>
                <p>{movie.description}</p> 
            </div>
        })}
    </div>
  )
}

export default MovieDetails ;
