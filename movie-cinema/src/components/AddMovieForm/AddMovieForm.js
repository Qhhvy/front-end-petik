import React, { useState } from 'react';
import "./AddMovieForm.css"

const AddMovieForm = ({onAddMovie}) => {
    const [formData, setFormdata] = useState({
        title: "",
        year: "",
        genre: "",
        poster: "",
    });

    const handleChange = (e) => {
        const {nama, value} = e.target;
        
        setFormdata({
            ...formData,
            [nama]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie(formData);
    }

    return (
        <div className="container">
            <section className="form">
                <div className="form-left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZoPqnD5GQOqwthBssAfu4dZ3qbmMkUuGYEvmOkTPvfmGTC07iAz086DiinSx0L-vm1M&usqp=CAU" alt="movie-img" className="form-image"/>
                </div>
                <div className="form-right">
                    <h1 className="form-title">Add Movie</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-inputgroup">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-input" id="title" onChange={handleChange}/>
                        </div>
                        <div class="form-inputgroup">
                            <label htmlFor="year" className="form-label">Year</label>
                            <input type="number" className="form-input" id="year" onChange={handleChange}/>
                        </div>
                        <div class="form-inputgroup">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <select name="genre" id="genre" className="form-input" onChange={handleChange}>
                                <option value="action">Action</option>
                                <option value="sci-fi">Sci-Fi</option>
                                <option value="adventure">Adventure</option>
                                <option value="horror">Horror</option>
                                <option value="drama">Drama</option>
                            </select>
                        </div>  
                        <button className="form-button">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;