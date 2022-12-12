import React, { useState } from 'react'
import API from '../../api-service';


function MovieForm(props) {
    const [title, setTitle] = useState(props.movie.title);
    const [description, setDescription] = useState(props.movie.description);

    const updateClicked = () =>{
        //console.log('Update Clicked')
        API.updateMovie(props.movie.id, {title : title, description : description})
        .then(resp =>console.log(resp))
        .catch(err => console.log(err));
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
                <button type='submit' onClick={updateClicked}>Update</button>
            </div>
        ) : null}
    </React.Fragment>
  )
}

export default MovieForm;
