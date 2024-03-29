import React from "react";

const Products = (props) => {
    const {gambar, nama, harga, beli} = props;

    return (
        <div className="konten">
            <div class="kartu">
                <div class="gambar-kartu">
                    <img src={gambar} alt="foto-barang" width={300}/>
                </div>
                <div class="badan-kartu">
                    <p>{nama}</p>
                    <p>Rp {harga}</p>
                    <button onClick={beli}>Beli</button>
                </div>
            </div>
        </div> 
    )
};

export default Products;