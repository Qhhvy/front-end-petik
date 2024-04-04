import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "../Movies/Movies.css"
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import { getTopRatedMovies } from "../../api.js";

const Movies = () => {
    const [datas, setDatas] = useState([])

    const handleClick = () => {
        const movie= {
            title: "The Amazing Spider-Man",
            year: "2015",
            genre: "Action",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCxnD0c7lrlVuC_9scj3XAGzwFG2gyT5he9x9Ys0C9V7PVRdg0y4G7RQhB2IVvUdZVS18&usqp=CAU",
        };
        setDatas([...datas, movie]);
    };

    const addMovie = (movie) => {
        setDatas([...datas, movie]);
    };

    useEffect(() => {
        // menangkap api
        getTopRatedMovies().then((result) => {
            setDatas(result);
        });
    }, []);

    return (
        <div className="">
            <h2>Top Rated Movies</h2>
            <div class="movies-container">
                {
                    datas.map((data) => {
                        return (
                            <Movie
                                id={data.id}
                                title={data.title}
                                year={data.release_date}
                                poster={data.poster_path}
                                vote_average={data.vote_average}
                                vote_count={data.vote_count}
                            />
                        );
                    })
                }
                <button onClick={handleClick}>Add Movie</button>
            </div>
            <AddMovieForm onAddMovie={addMovie}/>
        </div>
    );
};

export default Movies;