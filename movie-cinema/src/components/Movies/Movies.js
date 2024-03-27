import React from "react";
import Movie from "../Movie/Movie";
import "./Movies.css"

const Movies = () => {
    const datas = [
        {
            title: "Black Panther",
            year: 2017,
            genre: "Sci-Fi",
            poster: "https://upload.wikimedia.org/wikipedia/id/0/0c/Black_Panther_film_poster.jpg",
        },
        {
            title: "Eternals",
            year: 2023,
            genre: "Sci-Fi",
            poster: "https://i.ebayimg.com/images/g/5I0AAOSw0LlhfMST/s-l1600.jpg",
        },
        {
            title: "Star Wars",
            year: 2019,
            genre: "Sci-Fi",
            poster: "https://i.pinimg.com/736x/06/84/ba/0684ba8e907af1c685ed1cedb913955a.jpg",
        },
        {
            title: "The Dark Knight",
            year: 2020,
            genre: "Action",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
        },
        {
            title: "The Godfather",
            year: 1972,
            genre: "Action",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEY-n34Lv5QVd8xBsmf2ACk0hcvl7Y-BkU6j8tP5GCAXKXxqQJSgABHy972u0xYgfY7M&usqp=CAU",
        }
    ];

    return (
        <div className="">
            <h2>Latest Movies</h2>
            <div class="movies-container">
                {
                    datas.map((data) => {
                        return (
                            <Movie
                                title={data.title}
                                year={data.year}
                                genre={data.genre}
                                poster={data.poster}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Movies;