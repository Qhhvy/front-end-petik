import React from "react";
import "./Movie.css"

const Movie = (props) => {
    const {title, genre, year, poster} = props;

    return (
        <div className="movie">
            <img src={poster} alt="title" width={200}/>
            <h3 className="title">{title}</h3>
            <p className="year">{year}</p>
            <p className="genre">{genre}</p>
        </div>
    );
};

export default Movie;