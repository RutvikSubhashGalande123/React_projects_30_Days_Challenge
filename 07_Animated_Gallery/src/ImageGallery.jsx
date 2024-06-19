import React, { useState } from "react";

function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div
          className="image-item"
          key={image.id}
          onClick={() => openModal(image)}
        >
          <img
            src={image.url}
            alt={image.title}
          />
          <div className="overlay"></div>
          <h3>{image.title}</h3>
        </div>
      ))}

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
            />
            <h2>{selectedImage.title}</h2>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
