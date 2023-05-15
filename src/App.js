import './App.css';
import {useState} from 'react'
import moviesData from './component/Data/Data'
import MovieList from './component/MovieList/MovieList'
import AddMovie from './component/AddMovie/AddMovie'
import Filter from './component/Filter/Filter';
function App() {
  const [imputSearch,setImputSearch] = useState("")
  const [movies, setMovies]=useState(moviesData)
  const add =(newMovie) => {setMovies({...movies,newMovie})}
  return (
    <div className="App">
    <Filter imputSearch={imputSearch} setImputSearch={setImputSearch}/>
    <MovieList movies={movies} imputSearch={imputSearch} />
    <AddMovie add={add}  />
  </div>
  );
}

export default App;
