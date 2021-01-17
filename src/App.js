import { Fragment, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import Nominations from './components/Nominations/Nominations';

function App() {

  const [results, setResults] = useState(null)
  const [nominations, setNominations] = useState([])
  const [text, setText] = useState('')
  
  console.log(nominations)
  console.log(results)

  const addToNominations = (movie) => {
    if (nominations.length < 5) {
      setNominations(nominations.concat(movie))
  }
}

  const removeFromNominations = (movieId) => {
    let newArray = nominations.filter(nomination => nomination.imdbID !== movieId)
    setNominations(newArray)
  }

  console.log(nominations)

  return (
    <Fragment>
      <header>
      <h4>The Shoppies</h4>
      <div className="search">
        <Search
          getResults={setResults}
          text={text}
          setText={setText}/>
      </div>
      </header>
      <section>
        <SearchResults 
          title={`Results for '${text}'`}
          results={results}
          nominations={nominations}
          addToNominations={addToNominations}
          />
        <Nominations title={'Nominations'} nominations={nominations} removeFromNominations={removeFromNominations} />
      </section> 
    </Fragment>
  );
}

export default App;
