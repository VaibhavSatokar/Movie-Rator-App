import React from 'react'

function MovieForm(props) {
  return (
    <div>
      <h1>{props.movie && props.movie.title} Edit</h1>
    </div>
  )
}

export default MovieForm;
