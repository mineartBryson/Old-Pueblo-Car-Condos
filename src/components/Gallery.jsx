import React, { useState, useEffect } from "react";
import carCollage1 from "../assets/images/CarCollage1.jpeg";
import carCollage4 from "../assets/images/CarCollage4.jpeg";
import carCollage5 from "../assets/images/CarCollage5.jpeg";
import carCollage6 from "../assets/images/CarCollage6.jpeg";
import carCollage7 from "../assets/images/CarCollage7.jpeg";
import "../styles/gallery.css";

const images = [carCollage1, carCollage4, carCollage5, carCollage6, carCollage7];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery">
      <img className="hero__photo" src={images[currentIndex]} alt="Car Condo" />
    </div>
  );
}

export default Gallery;
