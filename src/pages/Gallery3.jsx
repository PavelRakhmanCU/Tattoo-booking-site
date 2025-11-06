import React from "react";

function Gallery3() {
  console.log("Gallery component rendered")
  const images = [
    { id: 1, src: "", alt: "Image 1" },
    { id: 2, src: "", alt: "Image 2" },
    { id: 3, src: "", alt: "Image 3" },
    { id: 4, src: "", alt: "Image 4" },
    { id: 5, src: "", alt: "Image 5" },
    { id: 6, src: "", alt: "Image 6" },
    { id: 7, src: "", alt: "Image 7" },
    { id: 8, src: "", alt: "Image 8" },
    { id: 9, src: "", alt: "Image 9" },
    { id: 10, src: "", alt: "Image 10" },
    { id: 11, src: "", alt: "Image 11" },
    { id: 12, src: "", alt: "Image 12" },
    { id: 13, src: "", alt: "Image 13" },
    { id: 13, src: "", alt: "Image 13" },
    {id:14, src:"", alt:"Image 14"},
    {id:15, src:"", alt:"Image 15"},
    {id:16, src:"", alt:"Image 16"},
  
    ]

  return (
    <div className="gallery-container">
        <div className="gallery-description">
            <h2 style={{fontSize:"1em"}}>Cover up</h2>
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

export default Gallery3;