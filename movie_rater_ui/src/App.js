import './App.css';
import Header from './components/header/header';
import { useState, useEffect } from 'react';

function App() {
  const[movies, setMovies] = useState(["Movie1","Movie2"])

  return (
    <div className="App">
      <Header appName="Movie Rater" />
      <div className='layout'>
        <div>
          {movies.map(movie=>{
            return <h1>{movie}</h1>
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
