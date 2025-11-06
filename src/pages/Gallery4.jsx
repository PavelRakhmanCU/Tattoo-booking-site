import React from "react";

function Gallery4() {
  console.log("Gallery component rendered")
  const images = [
    { id: 1, src: "https://res.cloudinary.com/dicvjx88i/image/upload/v1762358040/image_11_jc60r7.jpg", alt: "Image 1" },
    { id: 2, src: "https://res.cloudinary.com/dicvjx88i/image/upload/v1762358038/image_7_nr3x7b.jpg", alt: "Image 2" },
    { id: 3, src: "https://res.cloudinary.com/dicvjx88i/image/upload/v1762358037/image_6_ytdbgx.jpg", alt: "Image 3" },
    { id: 4, src: "https://res.cloudinary.com/dicvjx88i/image/upload/v1762358037/image_10_uvuaoe.jpg", alt: "Image 4" },
    { id: 5, src: "https://res.cloudinary.com/dicvjx88i/image/upload/v1762358036/image_1_cfijhn.jpg", alt: "Image 5" }
    ]

  return (
    <div className="gallery-container">
        <div className="gallery-description">
            <h2 style={{fontWeight:"bold"}}>Post-Mastectomy Reconstruction and Scar Camouflage</h2>
            <p>
For post-mastectomy reconstruction, it’s recommended to wait at least six months after your last surgery. However, this timeline can vary depending on your skin type, personal healing process, and your doctor’s advice.
            </p>
            <p>I offer reconstructive nipple tattoos and scar camouflage free of charge to support anyone recovering from a traumatic experience.</p>
            <p>If you’re interested in getting a decorative tattoo in the same area, it will be charged at the regular rate.</p>
            <p>Please note that perfectly matching your natural skin tone is often impossible. If your scars are faint, I recommend allowing them to heal naturally.</p>
            <p>This procedure is most effective for vibrant or visible scars (pink, red, purple, or raised/keloid tissue), as it can make them significantly less noticeable and improve the overall texture of the skin.</p>
        </div>
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

export default Gallery4;