import React, { useState } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css"
import AddMovieForm from "../AddMovieForm/AddMovieForm";

const Movies = () => {
    const [nama, setNama] = useState("Ucup");

    const [hasil, setHasil] = useState(0); // state hasil

    const tambah = () => { // handle tambah
        setHasil((hasil) => hasil + 1);
    };

    const kurang = () => { // handle kurang
        setHasil((hasil) => hasil - 1);
    };

    const [datas, setDatas] = useState([
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
    ])

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
                <button onClick={handleClick}>Add Movie</button>
                <hr/>
                <p>Hasil : {hasil}</p>
                <button onClick={kurang}>Kurang</button>
                <button onClick={tambah}>Tambah</button>
            </div>
            <AddMovieForm onAddMovie={addMovie}/>
        </div>
    );
};

export default Movies;