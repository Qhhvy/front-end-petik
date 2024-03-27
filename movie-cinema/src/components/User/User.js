// import "./User.css"

// const User = (props) => {
//   const {member, gambar, nama, alamat, angkatan, hobi, status, button} = props;
  
//   // const headerStyle = {textAlign: "center", fontWeight: "bold"};
//   // const cellStyle = {textAlign: "center"};
//   // const tableStyle ={
//   //   border: "1px solid black",
//   //   width: "300px",
//   //   margin: "20px auto",  
//   // };

//   return (
//     <>
//     <div>
//       <table clasName="card">
//         <thead className="card-head">
//           <tr>
//             <td colspan={2}>{nama}</td>
//           </tr>
//         </thead>
//         <tbody className="card-body">
//           <tr>
//             <td colspan={2}>{member}</td>
//           </tr>
//           <tr>
//             <td>
//               <button onClick={button}>Message</button>
//             </td>
//             <td>
//               <button>Subscribe</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//     <br/>
//     {/* <h3>Latihan</h3>
//     <img src={gambar} alt="" width={264}/>
//     <p>Nama : {nama}</p>
//     <p>Alamat : {alamat}</p>
//     <p>Angkatan : {angkatan}</p>
//     <p>Hobi : {hobi.map((hobi) => hobi + ", ")}</p>
//     <p>Status : {status ? "Lulus" : "Sedang Belajar"}</p>
//     <button onClick={() => button(nama)}>Masuk</button> */}
//     </>
//   );
// };

// export default User;


import "./User.css";

const User = (props) => {
  const {nama, alamat, angkatan, hobi, status, message, member, gambar} = props;
  
  // const tableStyle = {
  //   border: "1px solid black",
  //   width: "300px",
  //   margin: "20px auto",
  // };

  // const headerStyle = { textAlign: "center", fontWeight: "bold" };

  // const cellStyle = { textAlign: "center" };
  return (
    <div>
      <table class="card">
        <thead class="card-head">
          <tr>
            <td colSpan={2}>{nama}</td>
          </tr>
        </thead>
        <tbody class="card-body">
          <tr>
            <td colSpan={2}>{member}</td>
          </tr>
          <tr>
            <td>
              <button onClick={message}>Message</button>
            </td>
            <td>
              <button>Subscribe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
