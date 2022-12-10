import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function MovieDetails(props) {

    const[highlighted, setHighlighted] = useState(-1)

    const highlighteRate = high =>evt =>{
        setHighlighted(high);
    }

  return (
    <div className='movie-details'>
        {props.movie ? (
            <div>
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
                        />
                    })
                    }
                </div>

            </div>
        ) : null}
    </div>
  )
}

export default MovieDetails ;

