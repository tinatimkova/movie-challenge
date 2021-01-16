import { Fragment, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';

function App() {

  const [results, setResults] = useState(null)
  const [nominations, setNominations] = useState([])
  const [text, setText] = useState('')

  const updateNominations = (clicked, movie) => {
    if (clicked) {
      setNominations(prevState => [...prevState, movie])
    } else {
      console.log('you do something wrong again, baby')
    }
  }

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
        <SearchResults title={`Results for '${text}'`} results={results} nominate={updateNominations} button={'Nominate'} />
        <SearchResults title={'Nominations'} results={nominations} button={'Remove'}/>
      </section>
    </Fragment>
  );
}

export default App;
