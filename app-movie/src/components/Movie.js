import { POSTERPATH_API, IMG_REPLACEMENT_API, DISCOVER_API } from "../API"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';




const Movie = ({ poster_path, movie_id,match }) => {
    
    const [movies, setMovies]=useState([])
    useEffect(() => {
    fetchData(DISCOVER_API)
    }, [])
    const fetchData = (API) => {
    fetch(API).then((respnse) => {
        return respnse.json()
    }).then((data) => {
    setMovies(data.results.find(movie=>movie.id == match.params.id))
    })
    }

    return (
    <div>
        <div className="container">
    <div className="row">
    <div className="col-md-4 card card-body">
        <img src={ movies.poster_path ? POSTERPATH_API + movies.poster_path : IMG_REPLACEMENT_API} 
        className="thumbnail" alt={movies.title} />
    </div>
    <div className="col-md-8">
        <h2 className="--title">{movies.title}</h2>
        <ul className="list-group">
            <li className="list-group-item">
            <strong>TMDB Rating : {movies.vote_average} </strong> 
            </li>
            <li className="list-group-item">
            <strong>Date : {movies.release_date} </strong> 
            </li>
            <li className="list-group-item">
            <strong>About : {movies.overview} </strong> 
            </li>
        </ul>
    </div>
    </div>
    <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
            
       
            <a
            href={'https://themoviedb.org/3/movie'+movies.id+'/videos'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            >
            View Trailer
            </a>
        <Link to="/" className="btn btn-default text-light">
            Go Back To Home
        </Link>
            </div>
        </div>
    </div>
    </div>
);
}

export default Movie ;