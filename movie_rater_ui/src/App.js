import './App.css';
import Header from './components/header/header';
import { useState, useEffect } from 'react';
import MovieList from './components/movies/movie-list';

function App() {
  const[movies, setMovies] = useState(['Movie 1','Movie 2','Movie 3'])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/",{
      method:'GET',
      headers : {
        'Content-Type':'application/json',
        'Authorization':'Token 625053af7b8ec3c1711c8002e14054b3a2f0263c'
      }
    })
    .then(resp=>resp.json())
    .then(resp =>setMovies(resp))
    .catch(err => console.log(err));
  }, [])
  

  return (
    <div className="App">
      <Header appName="Movie Rater" />
      <div className='layout'>
        <div>
          {movies.map(movie =>{
            return <h2>{movie.title}</h2>
          })}
        </div>

        <div>
          Movie Details
        </div>
      </div>
    </div>
  );
}

export default App;
