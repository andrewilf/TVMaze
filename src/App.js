import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import React, { useState, useEffect } from 'react';

function App() {
  const json = require('./results.json'); //(with path)
  //console.log(json)

  const [searched, setSearched] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [jsonData, setJsonData] = useState(json)



  useEffect(() => {
    let url = "https://api.tvmaze.com/search/shows?q=" + searchTerm
    console.log(url)
    const makeApiCall = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((res2) => {
          setJsonData(res2)
        })
    }
    
    makeApiCall()
    //console.log("use effect")
    //console.log(jsonData)
  }, [searchTerm])



  return (
    <div className="App">
      <h1>TVMaze React</h1>
      <div style={{ paddingBottom: "60px" }}>
        <Search setSearched={setSearched} setSearchTerm={setSearchTerm} />
      </div>

      <div className="showResults">
        {searched ? <Results data={jsonData} /> : <></>}

      </div>

    </div>
  );
}

export default App;



