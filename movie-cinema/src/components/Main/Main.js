// import User from "../User/User.js"
// import Car from "../Car/Car.js"
// import imgProfile from "../Ferrari.jpeg"

// const Main = () => {
//     return (
//         <div clasName="content">
//             <User 
//             nama="Adi" 
//             member="Platinum" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <User 
//             nama="Joko" 
//             member="Gold" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <User 
//             nama="Fahri" 
//             member="Silver" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <User 
//             nama="Yaya" 
//             member="Non Member" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <User 
//             nama="Budi" 
//             member="Silver" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <User 
//             nama="Ramsey" 
//             member="Platinum" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <User 
//             nama="Mona" 
//             member="Gold" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <User 
//             nama="Azizah" 
//             member="Silver" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <User 
//             nama="Hafsah" 
//             member="Diamond" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <User 
//             nama="Ferry" 
//             member="Gold" 
//             button={() => alert("lorem ipsum dolor sir amet!")}
//             />
//             <Car 
//             // gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7Hv3Qb8SYkmExW-8QlTKLwdsV-ttRZrGEKJmYe-3N4uzgywPWb0dHXqrH2C_2M6NeHU&usqp=CAU" atau
//             gambar={imgProfile}
//             merek="Ferari" 
//             harga={5000000000} 
//             isNew={true} 
//             colors={["Hitam", "Putih", "Abu-Abu"]} 
//             beli={() => alert("Sudah Dibeli")}
//             />
//         </div>
//     )
// }

// export default Main;

import User from "../User/User.js";
import Car from "../Car/Car.js";
import imgProfile from "../Ferrari.jpeg";
import "./Main.css";
import Movies from "../Movies/Movies.js";
import Hero from "../Hero/Hero.js";

const Main = () => {
    const datas = [
        {
          nama: "Adi",
          member: "Non-Member",
          message: "Profil telah dibuka!"
        },
        {
          nama: "Joko",
          member: "Platinum",
          message: "Profil telah dibuka!"
        },
        {
          nama: "Ferry",
          member: "Silver",
          message: "Profil telah dibuka!"
        },
        {
          nama: "Budi",
          member: "Gold",
          message: "Profil telah dibuka!"
        },
        {
          nama: "Ramsey",
          member: "Platinum",
          message: "Profil telah dibuka!"
        },
        {
          nama: "Mona",
          member: "Diamond",
          message: "Profil telah dibuka!"
        },
        {
          nama: "Azizah",
          member: "Silver",
          message: "Profil telah dibuka!"
        },
        {
          nama: "Hafsah",
          member: "Non-Member",
          message: "Profil telah dibuka!"
        },
        {
          nama: "Ferry",
          member: "Silver",
          message: "Profil telah dibuka!"
        },
        {
            nama: "Badi",
            member: "Gold",
            message: "Profil telah dibuka!"
        }
      ];
    return (
        <div class="content">            
            <Hero/>
            <Movies/>
            {
                datas.map((data) => {
                    return (
                        <User
                            nama={data.nama}
                            member={data.member}
                            message={() => alert(data.message)}
                        />
                    );
                })
            }
            {/* <Car 
                // gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7Hv3Qb8SYkmExW-8QlTKLwdsV-ttRZrGEKJmYe-3N4uzgywPWb0dHXqrH2C_2M6NeHU&usqp=CAU" atau
                gambar={imgProfile}
                merek="Ferari" 
                harga={5000000000} 
                isNew={true} 
                colors={["Hitam", "Putih", "Abu-Abu"]} 
                beli={() => alert("Sudah Dibeli")}
            /> */}
        </div>
  );
};

export default Main;