import React from "react";
import "./Products.css";

const Products = (props) => {
    const {gambar, nama, harga, beli} = props;

    return (
        <div className="konten">
            <div class="kartu">
                <div className="gambar-kartu">
                    <img src={gambar} alt="foto-barang" width={300}/>
                </div>
                <div className="badan-kartu">
                    <p style={{ color: "grey" }}>{nama}</p>
                    <p style={{ fontSize: "30px", color: "green", fontWeight: "bold" }}>Rp {harga}</p>
                    <button onClick={beli}>Beli</button>
                </div>
            </div>
        </div> 
    )
};

export default Products;