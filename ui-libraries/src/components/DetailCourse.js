import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailCourse = ({ id }) => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = async () => {
        try {
            const response = await axios.get(`http://api.sukmax.my.id/course/${id}`);
            setDetails(response.data);
        } catch (error) {
            console.error("Error fetching course details:", error);
        }
    };

    return (
        <section className="section md-5">
            <div className="container">
                <div className="columns">
                    <div className="column is-half">
                        <figure className="image is4by3">
                            <img src={details.url} alt="Course"/>
                        </figure>
                    </div>
                    <div className="column">
                        <div className="content">
                            <div className="title is-4">{details.name}</div>
                            <p>{details.description}</p>
                            <div className="field p-5">
                                <button className="button is-primary is-fullwidth mb-3 text-white">Add to Cart</button>
                                <button className="button is-primary is-fullwidth is-outlined">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailCourse;
