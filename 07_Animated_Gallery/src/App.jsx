import React, { useState } from "react";
import "./App.css";
import ImageGallery from "./ImageGallery";

function App() {
  const [images, setImages] = useState([
    { id: "id1", url: "image1.jpeg", title: "I" },
    { id: "id2", url: "image2.jpeg", title: "Love" },
    { id: "id3", url: "image3.jpeg", title: "You" },
    { id: "id5", url: "image5.jpeg", title: "Nature" },
    { id: "id6", url: "image6.jpeg", title: "Travel" },
    { id: "id7", url: "image7.jpeg", title: "Flowers" },
    { id: "id8", url: "image8.jpeg", title: "Mountains" },
  ]);

  return (
    <div>
      <h1>Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
