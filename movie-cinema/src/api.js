import axios from "axios";

const apikey = "4af5c5b93cbfa11c7d32381c4e895675";

export const getMovieList = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`);

    return movie.data.results;
}

export const getMovieDetail = async (id) => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`);

    return movie.data.results;
}

export const getTopRatedMovies = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`);

    return movie.data.results;
}