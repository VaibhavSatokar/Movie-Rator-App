import './App.css';
import Header from './components/header/header';
import { useState, useEffect } from 'react';
import MovieList from './components/movies/movie-list';
import MovieDetails from './components/movies/movie-details';
import MovieForm from './components/movies/movie-form';
import { useCookies } from 'react-cookie';



function App() {
  const[movies, setMovies] = useState([]);
  const[selectedMovie, setSelectedMovie] = useState(null);
  const[editedMovie, setEditedMovie] = useState(null);

  const [token] = useCookies(['mr-token']);

  

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/",{
      method:'GET',
      headers : {
        'Content-Type':'application/json',
        'Authorization':`Token ${token['mr-token']}`
      }
    })
    .then(resp=>resp.json())
    .then(resp =>setMovies(resp))
    .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    if(!token['mr-token']) window.location.href='/'
  },[token])

  const loadMovie = movie =>{
    setSelectedMovie(movie);
    setEditedMovie(null);
  }

  const editClicked = movie =>{
    setEditedMovie(movie)
    setSelectedMovie(null)
  }

  const updatedMovie = movie =>{
    const newMovies = movies.map(mov=>{
      if (mov.id === movie.id){
        return movie;
      }
      return mov;
    })
    setMovies(newMovies);
  }

  const newMovie= ()=>{
    setEditedMovie({title: '',description: ''});
    setSelectedMovie(null);
  }

  const movieCreated = movie=>{
    const newMovies =[...movies,movie];
    setMovies(newMovies)
  }
  
  const removeClicked = movie => {
    const newMovies = movies.filter(mov => mov.id !== movie.id);
      setMovies(newMovies)
  }

  return (
    <div className="App">
      <Header appName="Movie Rater" />
      <div className='layout'>
        <div>
          <button onClick={newMovie}>New Movie</button>
          <MovieList 
          movies={movies} 
          movieClicked={loadMovie} 
          editClicked={editClicked}
          removeClicked={removeClicked}/>
        </div>
          <MovieDetails 
          movie={selectedMovie} 
          updateMovie={loadMovie}/>
          
          {editedMovie ? 
          (<MovieForm movie={editedMovie} 
          updatedMovie={updatedMovie} 
          movieCreated={movieCreated}/>) : null}
      </div>
    </div>
  );
}

export default App;
