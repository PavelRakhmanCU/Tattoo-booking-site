import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiFontSize } from "react-icons/bi";
function ArtistInfo() {
    const navigate = useNavigate()
    const handleBookAppointmetClick = ()=>{
        navigate('/booking')
    }
  return (
    <section className="artist-info">
      <h2 className="artist-name">Sogdiana Kashaeva</h2>
      <h2 className="artist-genres">Realism, Micro Realism & Painterly Tattoos</h2>
      <div className="artist-portrait"></div>
      <button className="book-btn" onClick={handleBookAppointmetClick}>Book an appointment</button>
    </section>
  );
}

export default ArtistInfo;