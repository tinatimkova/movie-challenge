import { Fragment, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import axios from 'axios';

function App() {

  const [results, setResults] = useState(null)

  console.log(results)

  const fetchSearchResults = (text) => {
    return axios({
      method: 'GET',
      url: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${text}&r=json&type=movie`
    })
  } 

  return (
    <Fragment>
      <header>
      <h4>The Shoppies</h4>
      <div className="search">
        <Search searchResults={fetchSearchResults} getResults={setResults}/>
      </div>
      </header>
      <section>
        <SearchResults title={`Results for`} results={['Rambo(1999)', 'Hey Ram(2000)', 'Ram Dass, Going Home(2007)']} button={'Nominate'} />
        <SearchResults title={'Nominations'} results={["Rambo(1999)"]} button={'Remove'}/>
      </section>
    </Fragment>
  );
}

export default App;
