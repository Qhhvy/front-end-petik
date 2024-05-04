import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AddBooking = () => {
  return (
      <div>
        <Navbar/>
            <section className="form container">                
                <div className="form-right">
                    <h1 className="form-title">Add Movie</h1>
                    <form onSubmit="">
                        <div className="form-inputgroup">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-input" id="title" onChange=""/>
                        </div>
                        <div class="form-inputgroup">
                            <label htmlFor="year" className="form-label">Year</label>
                            <input type="number" className="form-input" id="year" onChange=""/>
                        </div>
                        <div class="form-inputgroup">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <select name="genre" id="genre" className="form-input" onChange="">
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
            <Footer/>
        </div>
  )
}

export default AddBooking
