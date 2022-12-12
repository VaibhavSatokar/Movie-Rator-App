import React from 'react'

function MovieForm(props) {
  return (
    <React.Fragment>
        {props.movie ? (
            <h1>{props.movie.title} Edit</h1>
        ) : null}
    </React.Fragment>
  )
}

export default MovieForm;
