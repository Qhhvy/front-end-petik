import React from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { useParams } from "react-router-dom";

const Detail = () => {
    let {id} = useParams();

    return (
        <div className="app">
            <h1>Movie Detail : {id}</h1>
            <MovieDetail movieId={id} />
        </div>
    );
};

export default Detail;
