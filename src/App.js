import { Fragment, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import Nominations from './components/Nominations/Nominations';

function App() {

  const [results, setResults] = useState(null)
  const [nominations, setNominations] = useState([])
  const [text, setText] = useState('')
  
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
          setNominations={setNominations}
          />
        <Nominations title={'Nominations'} nominations={nominations} setNominations={setNominations} />
      </section> 
    </Fragment>
  );
}

export default App;
