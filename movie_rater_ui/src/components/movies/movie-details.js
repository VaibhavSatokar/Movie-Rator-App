import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function MovieDetails(props) {

    const[highlighted, setHighlighted] = useState(-1)

    const highlighteRate = high =>evt =>{
        setHighlighted(high);
    }

    const rateClicked = rate => evt =>{
        fetch(`http://127.0.0.1:8000/api/movies/${props.movie.id}/rate_movie/`,{
            method:'POST',
            headers : {
                'Content-Type':'application/json',
                'Authorization':'Token 625053af7b8ec3c1711c8002e14054b3a2f0263c'
            },
            body :JSON.stringify({stars: rate + 1})
        })
        .then(() =>getDetails())
        .catch(err => console.log(err));
    }


    const getDetails = () =>{
        fetch(`http://127.0.0.1:8000/api/movies/${props.movie.id}/`,{
            method:'GET',
            headers : {
                'Content-Type':'application/json',
                'Authorization':'Token 625053af7b8ec3c1711c8002e14054b3a2f0263c'
            }
        })
        .then(resp=>resp.json())
        .then(resp =>props.updateMovie(resp))
        .catch(err => console.log(err));

    }



  return (
    <React.Fragment>
        {props.movie ? (
            <div className='movie-details'>
                <h1>{props.movie.title}</h1>
                <p>{props.movie.description}</p>
                <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 0 ? 'orange' : ''}/>
                <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 1 ? 'orange' : ''} />
                <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 2 ? 'orange' : ''} />
                <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 3 ? 'orange' : ''} />
                <FontAwesomeIcon icon={faStar} className={props.movie.avg_rating > 4 ? 'orange' : ''}/>
                ({props.movie.no_of_ratings})

                <div className='rate-container'>
                    <h2>Rate it</h2>
                    {[...Array(5)].map((e, i)=>{
                        return <FontAwesomeIcon key={i} icon={faStar} className={highlighted > i-1 ? 'purple' : ''}
                        onMouseEnter = {highlighteRate(i)}
                        onMouseLeave = {highlighteRate(-1)}
                        onClick={rateClicked(i)}
                        />
                    })
                    }
                </div>

            </div>
        ) : null}
    </React.Fragment>
  )
}

export default MovieDetails ;

