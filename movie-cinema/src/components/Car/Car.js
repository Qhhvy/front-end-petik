import car from "../Ferrari.jpeg"
import "./Car.css"

const Car = (props) => {
  const {merek, harga, isNew, colors, beli} = props;

  return (
    <>
    <div className="konten">
      <div class="kartu">
        <div class="gambar-kartu">
          <img src={car} alt="foto-mobil" width={300}/>
        </div>
        <div class="badan-kartu">
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>{merek}</p>
          <p style={{ fontSize: "30px", color: "green", fontWeight: "bold" }}>Rp {harga}</p>
          <p>Kondisi : {isNew ? "Baru" : "Bekas"}</p>
          <p>Varian Warna : {colors.map((color) => color + ", ")}</p>
          <button onClick={beli}>Beli</button>
        </div>
      </div>
    </div>  
    </> // fragment tag
  );
};

export default Car;