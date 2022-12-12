import React, { useState } from 'react'
import API from '../../api-service';


function MovieForm(props) {
    const [title, setTitle] = useState(props.movie.title);
    const [description, setDescription] = useState(props.movie.description);

    const createClicked = () =>{
        //console.log('Update Clicked')
        API.createMovie({title : title, description : description})
        .then(resp =>props.movieCreated(resp))
        .catch(error => console.log(error));
    }
    
    const updateClicked = () =>{
        //console.log('Update Clicked')
        API.updateMovie(props.movie.id, {title : title, description : description})
        .then(resp =>props.movieCreated(resp))
        .catch(error => console.log(error));
    }

  return (
    <React.Fragment>
        {props.movie ? (
            <div className='movie-form'>
                <label htmlFor='title'>Title</label><br/>
                <input type='text' id='title' placeholder='Title' 
                value={title} onChange={evt=>setTitle(evt.target.value)}
                /><br/>
                <label htmlFor='description'>Description</label><br/>
                <textarea type='text' id='description' placeholder='Description'
                value={description} onChange={evt=>setDescription(evt.target.value)}
                ></textarea><br/>
                {props.movie.id ? 
                <button type='submit' onClick={updateClicked}>Update</button> :
                <button type='submit' onClick={createClicked}>Create</button>
                }
                
            </div>
        ) : null}
    </React.Fragment>
  )
}

export default MovieForm;
