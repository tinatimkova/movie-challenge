import MoviesState from './context/movies/MoviesState'
import './App.css';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';

function App() {

  return (
    <MoviesState>
      <header>
      <h4>The Shoppies</h4>
      <div className="search">
        <Search />
      </div>
      </header>
      <section>
        <SearchResults 
          title={'Movies'}
          button={'Nominate'}
          />
        <SearchResults
          title={'Nominations'}
          button={'Remove'} />
      </section> 
    </MoviesState>
  );
}

export default App;
