import React from "react";
import "./Products.css";

const Products = (props) => {
    const {gambar, nama, harga, beli, terjual, berat} = props;
    
    return (
        <div className="konten">
            <div class="kartu">
                <div className="gambar-kartu">
                    <img src={gambar} alt="foto-barang" width={300}/>
                </div>
                <div className="badan-kartu">
                    <p style={{ color: "grey", fontSize: "20px", fontWeight: "bolder" }}>{nama}</p>
                    <p style={{ fontSize: "30px", color: "green", fontWeight: "bold" }}>Rp {harga}</p>
                    <small style={{ color: "grey" }}>Berat : {berat}</small><br/>
                    <small style={{ color: "grey" }}>Terjual : {terjual}</small>
                    <br/>
                    <button onClick={beli}>Beli</button>
                </div>
            </div>
        </div>
    )
};

export default Products;