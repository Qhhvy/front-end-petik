import React, {useState} from "react";
import "./AddProductForm.css"

const AddProductForm = ({onAddProduct}) => {
    const [formData, setFormData] = useState({
        nama: "",
        harga: "",
        gambar: "",
    });

    const handleChange = (e) => {
        const {nama, value} = e.target;
        
        setFormData({
            ...formData,
            [nama]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct(formData);
    }

    return (
        <div className="kontener">
            <section className="form">
                <div className="form-left">
                    <img src="https://t3.ftcdn.net/jpg/00/58/74/68/360_F_58746879_ltaO80JZoFsu7YFCAPGD1xTiIkeIedCF.jpg" alt="movie-img" className="form-image"/>
                </div>
                <div className="form-right">
                    <h1 className="form-title">Add Product</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-inputgroup">
                            <label htmlFor="nama" className="form-label">Nama</label>
                            <input type="text" className="form-input" id="nama" onChange={handleChange}/>
                        </div>
                        <div class="form-inputgroup">
                            <label htmlFor="harga" className="form-label">Harga</label>
                            <input type="number" min={0} className="form-input" id="harga" onChange={handleChange}/>
                        </div>
                        <div className="form-inputgroup">
                            <label htmlFor="gambar" className="form-label">Gambar</label>
                            <input type="text" className="form-input" id="gambar" placeholder="https://...." onChange={handleChange}/>
                        </div>                       
                        <button className="form-button">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddProductForm;