import React from "react";
import "./Movie.css";
import {NavLink} from "react-router-dom";

const Movie = (props) => {
    const {title, year, poster, id} = props;

    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="title" width={200}/>
            <h3 className="title">
                <NavLink to={`/detail/${id}`}>{title}</NavLink>
            </h3>
            <p className="year">{year}</p>
        </div>
    );
};

export default Movie;