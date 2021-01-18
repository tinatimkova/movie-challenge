import { useState } from 'react';
import MoviesState from './context/movies/MoviesState'
import './App.css';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';

function App() {

  const [results, setResults] = useState(null)
  const [nominations, setNominations] = useState([])
  // const [text, setText] = useState('')

  return (
    <MoviesState>
      <header>
      <h4>The Shoppies</h4>
      <div className="search">
        <Search
          getResults={setResults}
          />
      </div>
      </header>
      <section>
        <SearchResults 
          title={`Results for`}
          results={results}
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
