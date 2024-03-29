import React from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";

const Main = () => {
    const datas = [
        {
            nama: "Kursi Gaming Fantech",
            harga: 2350000,
            gambar: "https://media.monotaro.id/mid01/full/Kebutuhan%20Kantor/Furnitur/Kursi%20Kantor%2FKomersial/Kursi%20Kerja/Fantech%20Premium%20Gaming%20Chair/Fantech%20Premium%20Gaming%20Chair%20GC283%20White%201unit/blS032469417-1.jpg",
            beli: "Berhasil dibeli",
        },
        {
            nama: "Poco X6 Pro",
            harga: 4999000,
            gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydDps9Yp7nplvwYpnhfuIQHz87xnOG_SK-9JGVHKwZNu_is9NXdb3spShaC6imBt_8zs&usqp=CAU",
            beli: "Berhasil dibeli",
        },
        {
            nama: "SSD Seagate 1TB Gen 4",
            harga: 2450000,
            gambar: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/10/25/299501ce-f220-487d-addc-a0c2f925a2e2.jpg",
            beli: "Berhasil dibeli",
        },
    ];

    return (
        <div className="content">
            <Header />
            {/* <Products nama="Poco X6 Pro"  harga={2499000}  beli={() => alert("Sudah Dibeli")}/> */}
            {
                datas.map((data) => {
                    return (
                        <Products
                            gambar={data.gambar}
                            nama={data.nama}
                            harga={data.harga}
                            beli={() => alert(data.beli)}
                        />
                    );
                })
            }
            <Footer nama="Kahfi Al Ghifari"/>
        </div>
    )
};

export default Main;