import React, { useEffect, useState } from "react";
import "../Movies/Movies.css";
import { getMovieDetail } from "../../api";

const MovieDetail = ({ movieId }) => {
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        // Panggil fungsi untuk mendapatkan detail film saat komponen dimuat
        fetchMovieDetail();
    }, [movieId]); // Jadikan dependensi movieId agar komponen diperbarui ketika movieId berubah

    const fetchMovieDetail = async () => {
        try {
            // Panggil fungsi getMovieDetail dengan movieId yang diberikan
            const movie = await getMovieDetail(movieId);
            // Set detail film ke state
            setMovieDetail(movie);
        } catch (error) {
            console.error("Error fetching movie detail:", error);
        }
    };

    if (!movieDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-detail">
            <h2>{movieDetail.title}</h2>
            <p>Year: {movieDetail.release_date}</p>
            <p>Genre: {movieDetail.genre}</p>
            <img src={movieDetail.poster} alt={movieDetail.title} />
            {/* Tambahkan informasi lain yang ingin ditampilkan */}
        </div>
    );
};

export default MovieDetail;
