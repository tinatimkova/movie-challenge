import { useState } from 'react';
import MoviesState from './context/movies/MoviesState'
import './App.css';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';

function App() {

  const [nominations, setNominations] = useState([])

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
          nominations={nominations}
          setNominations={setNominations}
          button={'Nominate'}
          />
        <SearchResults title={'Nominations'}
          results={nominations}
          nominations={nominations}
          setNominations={setNominations}
          button={'Remove'} />
      </section> 
    </MoviesState>
  );
}

export default App;
