import man from "./man.png"

const Car = (props) => {
  const {merek, harga, isNew, colors, beli} = props;

  return (
    <>
      <img src={man} alt="foto-mobil"/>
      <h3>Merek Mobil : {merek}</h3>
      <h4>Harga Mobil : {harga} Milyar</h4>
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
      <h6>Varian Warna : {colors.map((color) => color + ", ")}</h6>
      <button onClick={beli}>Beli</button>
    </> // parent tag
  );
};

export default Car;