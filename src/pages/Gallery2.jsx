import React from "react";

function Gallery2() {
  console.log("Gallery component rendered")
  const images = [
    { id: 1, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104857/bg_pic8_itfliu.jpg", alt: "Image 1" },
    { id: 2, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104862/bg_pic17_fuxsil.jpg", alt: "Image 2" },
    { id: 3, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104861/bg_pic14_pxcgns.jpg", alt: "Image 3" },
    { id: 4, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104860/bg_pic16_n2zcrx.jpg", alt: "Image 4" },
    { id: 5, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104859/bg_pic10_wnhwsr.jpg", alt: "Image 5" },
    { id: 6, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104859/bg_pic12_nd40iw.jpg", alt: "Image 6" },
    { id: 7, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104858/bg_pic6_leucz0.jpg", alt: "Image 7" },
    { id: 8, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104857/bg_pic5_xcgbcp.jpg", alt: "Image 8" },
    { id: 9, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104856/bg_pic4_fj4lpo.jpg", alt: "Image 9" },
    { id: 10, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104856/bg_pic3_vkpqkx.jpg", alt: "Image 10" },
    { id: 11, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762104856/bg_pic1_vpeo3e.jpg", alt: "Image 11" },
    { id: 12, src: "https://res.cloudinary.com/dicvjx88i/image/upload/c_fill,w_300/v1762100115/pic4_vifxno.jpg", alt: "Image 12" }
    
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

export default Gallery2;