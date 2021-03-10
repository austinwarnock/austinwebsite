import React from "react";
import Gallery from "react-photo-gallery";


import { photos } from "../photos";

const photoGallery = () => {

  return (
    <section id="gallery">
    <Gallery photos={photos} />
    </section>
  );
}

export default photoGallery;
