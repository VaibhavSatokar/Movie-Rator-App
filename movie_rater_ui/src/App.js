import './App.css';
import Header from './components/header/header';
import { useState, useEffect } from 'react';
import MovieList from './components/movies/movie-list';
import MovieDetails from './components/movies/movie-details';
import MovieForm from './components/movies/movie-form';


function App() {
  const[movies, setMovies] = useState([]);
  const[selectedMovie, setSelectedMovie] = useState(null);
  const[editedMovie, setEditedMovie] = useState(null);

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

  

  const loadMovie = movie =>{
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClicked = movie =>{
    setEditedMovie(movie)
    setSelectedMovie(null)
  }
  

  return (
    <div className="App">
      <Header appName="Movie Rater" />
      <div className='layout'>
          <MovieList movies={movies} movieClicked={loadMovie} editClicked={editClicked}/>
          <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
          <MovieForm movie={editedMovie}/>
      </div>
    </div>
  );
}

export default App;
