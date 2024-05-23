import React from 'react'
import our_images from '../images/our_images.webp'
import our_room from '../images/our_room.webp'
import swimmingpool from '../images/swimmingpool.webp'
import "./Gallery.css"

function Gallery() {
  return (
    <>
      <div className="gallery">
        <h3 className="gallerytext">GALLERY</h3>
        <p className="gallery_outtext">Our Latest Photos</p>
        <section className="our_images">
          <div className="img_div">
            <img src={our_images} alt="Beschreibung des ersten Bildes" />
          </div>

          <div className="img_div">
            <img src={our_room} alt="Beschreibung des zweiten Bildes" />
          </div>

          <div className="img_div">
            <img src={swimmingpool} alt="Beschreibung des dritten Bildes" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery