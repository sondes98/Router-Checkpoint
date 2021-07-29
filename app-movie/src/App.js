import React from 'react';

import { DISCOVER_API } from './API';

import './App.css';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import 'font-awesome/css/font-awesome.min.css';

import MovieContainer from './components/MovieContainer' ;

import { useEffect, useState } from 'react';


function App(){

  const [movies, setMovies]=useState([])
  useEffect(() => {
    fetchData(DISCOVER_API)
    }, [])
  const fetchData = (API) => {
  fetch(API).then((respnse) => {
      return respnse.json()
  }).then((data) => {
    console.log(data.results)
  setMovies(data.results)
  })
  }
  
    return (
          <div className="App">
            <MovieContainer movies={movies} setMovies={setMovies} fetchData={fetchData}/>
          </div>  
    );
}

export default App;