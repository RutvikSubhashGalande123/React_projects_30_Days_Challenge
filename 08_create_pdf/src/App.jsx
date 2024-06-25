import React, { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const generate = () => {
    const input = document.getElementById("content-to-pdf");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("content.pdf");
    });
  };

  return (
    <div className="container">
      <h2>PDF Generator</h2>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button onClick={generate}>Generate</button>
        <div
          id="content-to-pdf"
          style={{ width: "210mm", height: "297mm" }}
        >
          {image && (
            <img
              src={image}
              alt="uploaded"
              style={{ width: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
