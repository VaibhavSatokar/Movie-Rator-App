import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import API from '../../api-service';


function MovieForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [token] = useCookies(['mr-token']);

    useEffect( ()=>{
        setTitle(props.movie.title);
        setDescription(props.movie.description);
    }, [props.movie])

    const createClicked = () =>{
        //console.log('Update Clicked')
        API.createMovie({title : title, description : description},token['mr-token'])
        .then(resp =>props.movieCreated(resp))
        .catch(error => console.log(error));
    }
    
    const updateClicked = () =>{
        //console.log('Update Clicked')
        API.updateMovie(props.movie.id, {title : title, description : description},token['mr-token'])
        .then(resp =>props.updatedMovie(resp))
        .catch(error => console.log(error));
    }

    const isDisabled = title.length === 0 || description.length ===0;

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
                <button type='submit' onClick={updateClicked} disabled={isDisabled}>Update</button> :
                <button type='submit' onClick={createClicked} disabled={isDisabled}>Create</button>
                }
                
            </div>
        ) : null}
    </React.Fragment>
  )
}

export default MovieForm;
