import React from "react";

function Gallery() {
  console.log("Gallery component rendered")
  const images = [
    { id: 1, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100125/%D0%A4%D0%BE%D1%82%D0%BE_10-5-25_16_58_47_1_d7yeid.jpg", alt: "Image 1" },
    { id: 2, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100123/pic25_szwxql.jpg", alt: "Image 2" },
    { id: 3, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100116/pic7_qzqani.jpg", alt: "Image 3" },
    { id: 4, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100122/pic20_rrlghu.jpg", alt: "Image 4" },
    { id: 5, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100123/pic21_zqbwub.jpg", alt: "Image 5" },
    { id: 6, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100120/pic18_yc8hny.jpg", alt: "Image 6" },
    { id: 7, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762104862/bg_pic13_oupbfj.jpg", alt: "Image 7" },
    { id: 8, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100117/pic11_ypu3pd.jpg", alt: "Image 8" },
    { id: 9, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100122/pic19_pgwalb.jpg", alt: "Image 9" },
    { id: 10, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100117/pic13_pyrrdz.jpg", alt: "Image 10" },
    { id: 11, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100124/pic26_jozzlw.jpg", alt: "Image 11" },
    { id: 12, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100122/pic24_ipobjc.jpg", alt: "Image 12" },
    { id: 13, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100116/pic8_kagrjw.jpg", alt: "Image 13" },
    { id: 13, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762100117/pic12_jinrii.jpg", alt: "Image 13" },
    {id:14, src:"https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762104856/bg_pic2_kzwrfu.jpg", alt:"Image 14"},
    {id:15, src:"https://res.cloudinary.com/dicvjx88i/image/upload/c_pad,w_300/v1762104858/bg_pic11_xmn5ir.jpg", alt:"Image 15"},
    {id:16, src:"https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104857/bg_pic9_mugcrq.jpg", alt:"Image 16"},
  
    ]

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image,index) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;