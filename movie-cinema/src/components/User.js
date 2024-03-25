const User = (props) => {
  const {gambar, nama, alamat, angkatan, hobi, status, button} = props;
  
  return (
    <>
      <h3>Latihan</h3>
      <img src={gambar} alt="" width={264}/>
      <p>Nama : {nama}</p>
      <p>Alamat : {alamat}</p>
      <p>Angkatan : {angkatan}</p>
      <p>Hobi : {hobi.map((hobi) => hobi + ", ")}</p>
      <p>Status : {status ? "Lulus" : "Sedang Belajar"}</p>
      <button onClick={() => button(nama)}>Masuk</button>
    </>
  );
};

export default User;