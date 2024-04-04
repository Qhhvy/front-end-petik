import React from "react";
import "./Movie.css";
import {NavLink} from "react-router-dom";

const Movie = (props) => {
    const {title, year, poster, id, vote_average, vote_count} = props;

    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="title" width={200}/>
            <h3 className="title">
                <NavLink to={`/detail/${id}`}>{title}</NavLink>
            </h3>
            <p className="year">{year}</p>
            <p>Score : {vote_average}</p>
            <p>Total Voters : {vote_count}</p>
        </div>
    );
};

export default Movie;