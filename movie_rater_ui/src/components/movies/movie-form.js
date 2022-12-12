import React from 'react'

function MovieForm(props) {
  return (
    <React.Fragment>
        {props.movie ? (
            <div className='movie-form'>
                <label htmlFor='title'>Title</label>
                <input type='text' id='movie-title' placeholder='Title' />
                <label htmlFor='description'>Description</label>
                <input type='textarea' id='movie-description' placeholder='Description'/>
            </div>
        ) : null}
    </React.Fragment>
  )
}

export default MovieForm;
