import {POSTERPATH_API, IMG_REPLACEMENT_API} from "../API";

import { useEffect, useState, useRef } from 'react';

import { DISCOVER_API } from '../API';

import { Link } from 'react-router-dom';




const MovieCard = ({title, poster_path, vote_average, id }) => {
    const [movies, setMovies]=useState([])
    
    useEffect(() => {
    fetchData(DISCOVER_API)
    }, [])
    const fetchData = (API) => {
    fetch(API).then((respnse) => {
        return respnse.json()
    }).then((data) => {
      //console.log(data)
    setMovies(data.results)
    })
    }

    return(
        <div className="movie">
            <img src={poster_path ? POSTERPATH_API + poster_path : IMG_REPLACEMENT_API} alt={title}/>
            <div className="movie-info">
                <h3 className="movie-title">{title}</h3>
                <span className={"movie-vote " + voteClass(vote_average)}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h3 className="movie-title">{title}</h3>
                    <Link  to={{pathname:`/Movie/${id}`, state:{movies}}}>
                    
                        <button className="btn-t">
                            More Details
                        </button>
                    </Link>
            </div>
        </div>
    )
}
const voteClass = (vote) => {
    if(vote >= 8)
        return "green"
    else if (vote >= 6)
        return "orange"
    else return "red"
}

export default MovieCard