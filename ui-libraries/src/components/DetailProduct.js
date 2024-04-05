import React from 'react';

const DetailProduct = () => {
  return (
    <section className="section md-5">
      <div class="container">
        <div class="columns">
            <div class="column is-half">
                <figure className="image is4by3">
                    <img src="https://storage.googleapis.com/hni-media/image/hni-mobile/produk/webp/ayambwg-pouch-2023.webp" alt=""/>
                </figure>
            </div>
            <div class="column">
                <div class="content">
                    <div class="title is-4">Product Name</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem harum placeat explicabo! Impedit adipisci at earum, ipsa voluptatem ipsam quia error iusto saepe. Adipisci reprehenderit itaque alias corrupti ducimus!</p>
                    <p><strong>Price : </strong> Rp 1.000.000</p>
                    <p>Stok 199</p>
                    <div class="field p-5">
                      <button className="button is-primary is-fullwidth mb-3 text-white">Add to chart</button>
                      <button className="button is-primary is-fullwidth is-outlined">Buy</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
};

export default DetailProduct;
