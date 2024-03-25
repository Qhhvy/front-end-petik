// import { Component } from "react";
import Header from "./components/Header.js"
import Car from "./components/Car.js"
import User from "./components/User.js"
import Footer from "./components/Footer.js"
import imgProfile from "./components/man.png"

function App() { // function component
  return (
    /* 
    in html = attributes
    in react = props (properties) */
    // element class
    <div className="App"> 
        <Header />
        <h1>Hello World</h1>
        <Car gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7Hv3Qb8SYkmExW-8QlTKLwdsV-ttRZrGEKJmYe-3N4uzgywPWb0dHXqrH2C_2M6NeHU&usqp=CAU" merek="Ferari" harga={5} isNew={true} colors={["Hitam", "Putih", "Abu-Abu"]} beli={() => alert("Sudah Dibeli")}/>
        <User nama="Ucup" alamat="Bandung, Jawa Barat" angkatan={11} hobi={["Membaca", "Menulis"]} status={false} button={(nama) => alert(`Profil ${nama} telah dibuka`)} gambar={imgProfile}
        />
        <User nama="Adi" alamat="Demak, Jawa Tengah" angkatan={11} hobi={["Membaca", "Menulis"]} status={false} button={(nama) => alert(`Profil ${nama} telah dibuka`)} gambar="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
        />
        <User nama="Joko" alamat="Surabaya, Jawa Timur" angkatan={11} hobi={["Membaca", "Menulis"]} status={false} button={(nama) => alert(`Profil ${nama} telah dibuka`)} gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgubqzveGfonqnt4XHQEuglmkeHwfzfSInQ&usqp=CAU"
        />
        <Footer nama="Kahfi Al Ghifari"/>
    </div>
  );
}

export default App;