import './App.css';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header appName="Movie Rater" />
      <div className='layout'>
        <div>Movie List</div>
        <div>Movie Details</div>
      </div>
    </div>
  );
}

export default App;
