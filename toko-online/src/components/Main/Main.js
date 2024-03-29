import React from "react";
import Products from "../Products/Products";
import "./Main.css";

const Main = () => {
    const datas = [
        {
            nama: "Kursi Gaming Fantech",
            harga: 2350000,
            gambar: "https://media.monotaro.id/mid01/full/Kebutuhan%20Kantor/Furnitur/Kursi%20Kantor%2FKomersial/Kursi%20Kerja/Fantech%20Premium%20Gaming%20Chair/Fantech%20Premium%20Gaming%20Chair%20GC283%20White%201unit/blS032469417-1.jpg",
            beli: "Berhasil dibeli",
            terjual: 130,
        },
        {
            nama: "Poco X6 Pro",
            harga: 4999000,
            gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydDps9Yp7nplvwYpnhfuIQHz87xnOG_SK-9JGVHKwZNu_is9NXdb3spShaC6imBt_8zs&usqp=CAU",
            beli: "Berhasil dibeli",
            terjual: 300,
        },
        {
            nama: "SSD Seagate 1TB Gen 4",
            harga: 2450000,
            gambar: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/10/25/299501ce-f220-487d-addc-a0c2f925a2e2.jpg",
            beli: "Berhasil dibeli",
            terjual: 180,
        },
    ];

    const fruits = [
        {
          nama: "Apel",
          harga: 5000,
          berat: "200g",
          gambar: "https://umsu.ac.id/artikel/wp-content/uploads/2023/07/Apel.jpg",
          beli: "Berhasil dibeli",
          terjual: 73,
        },
        {
          nama: "Jeruk",
          harga: 7000,
          berat: "250g",
          gambar:
            "https://www.ruparupa.com/blog/wp-content/uploads/2021/10/Screen-Shot-2021-10-26-at-14.57.25-1024x653.png",
          beli: "Berhasil dibeli",
            terjual: 623,
        },
        {
          nama: "Pisang",
          harga: 3000,
          berat: "150g",
          gambar:
            "https://static.honestdocs.id/system/blog_articles/main_hero_images/000/004/500/original/iStock-636739634_%281%29.jpg",
          beli: "Berhasil dibeli",
            terjual: 378,
        },
        {
          nama: "Anggur",
          harga: 10000,
          berat: "300g",
          gambar:
            "https://res.cloudinary.com/dk0z4ums3/image/upload/v1693464270/attached_image/8-manfaat-anggur-merah-untuk-kesehatan.jpg",
          beli: "Berhasil dibeli",
            terjual: 415,
        },
        {
          nama: "Mangga",
          harga: 8000,
          berat: "180g",
          gambar:
            "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Manfaat-Kesehatan-Buah-Mangga-yang-Mungkin-Belum-Kamu-Ketahui.jpg",
          beli: "Berhasil dibeli",
            terjual: 943,
        },
        {
          nama: "Strawberry",
          harga: 12000,
          berat: "100g",
          gambar:
            "https://www.puribundamalang.com/assets/images/photo/fakta-unik-strawberry123052019162904.jpg",
          beli: "Berhasil dibeli",
            terjual: 28,
        },
        {
          nama: "Semangka",
          harga: 15000,
          berat: "5000g",
          gambar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Watermeloen.jpg/800px-Watermeloen.jpg",
          beli: "Berhasil dibeli",
            terjual: 253,
        },
        {
          nama: "Nanas",
          harga: 6000,
          berat: "700g",
          gambar:
            "https://awsimages.detik.net.id/community/media/visual/2022/07/04/diet-nanas-bikin-bb-turun-1-kg-seminggu-apa-aman-untuk-kesehatan-3.jpeg?w=1200",
          beli: "Berhasil dibeli",
            terjual: 154,
        },
        {
          nama: "Kiwi",
          harga: 10000,
          berat: "120g",
          gambar:
            "https://duniasegar.com/wp-content/uploads/2020/07/30034.edt_-1202x800.jpg",
          beli: "Berhasil dibeli",
            terjual: 64,
        },
        {
          nama: "Durian",
          harga: 20000,
          berat: "1000g",
          gambar:
            "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/03/17/manfaat-biji-durian-1952951229.jpeg",
          beli: "Berhasil dibeli",
            terjual: 86,
        },
      ];
      

    return (
        <div className="content">
            <h1 style={{ padding: "0 2rem" }}>Hot Products</h1>
            <div class="products-container">
                {
                    datas.map((data) => {
                        return (
                            <Products
                                gambar={data.gambar}
                                nama={data.nama}
                                harga={data.harga}
                                terjual={data.terjual}
                                beli={() => alert(data.beli)}
                            />
                        );
                    })
                }
            </div>
            <h1 style={{ padding: "0 2rem" }}>Fresh Fruits</h1>
            <div class="products-container">
                {
                    fruits.map((data) => {
                        return (
                            <Products
                                gambar={data.gambar}
                                nama={data.nama}
                                harga={data.harga}
                                berat={data.berat}
                                terjual={data.terjual}
                                beli={() => alert(data.beli)}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
};

export default Main;