import React from "react";

function Gallery() {
  const images = [
    { id: 1, src: "/images/pic1.jpeg", alt: "Image 1" },
    { id: 2, src: "/images/pic2.jpeg", alt: "Image 2" },
    { id: 3, src: "/images/pic3.jpeg", alt: "Image 3" },
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;