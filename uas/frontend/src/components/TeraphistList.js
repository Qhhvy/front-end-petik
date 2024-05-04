import React, { useEffect, useState } from 'react';
import image from "../assets/img/doctor_vector.png";
import { NavLink } from'react-router-dom';

const TeraphistList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/teraphist')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err));
    }, []);

    return (
      <div className="container theme-light">
        <div className="fixed-grid has-4-cols">
          <div className="grid">
              {data.map((d, i) => (
                <div className="cell">
                    <div className="card has-background-light" key={i} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div className="card-image">
                        <figure className="">
                          <img src={image} alt=""/>
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h4 className="has-text-weight-bold">{d.nama}</h4>
                          <p className="has-text-weight-light">Melayani: Bekam, Gurah, Totok Punggung</p>
                        </div>
                      </div>
                      <NavLink to="/create-booking" style={{ alignSelf: "flex-end", marginBottom: "10px" }}>
                        <button className="button is-success mr-5 mb-5">Buat Janji</button>
                      </NavLink>
                    </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
}

export default TeraphistList;
