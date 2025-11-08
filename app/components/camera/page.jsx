"use client";
import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

export default function App() {
  const [photos, setPhotos] = useState([]);

  function handleTakePhoto(dataUri) {
    console.log("Photo captured");
    setPhotos((prevPhotos) => [dataUri, ...prevPhotos]);
  }

  function handleCameraError(error) {
    console.error("Camera error:", error);
  }

  return (
    <div style={{ textAlign: "center",  }}>
      <Camera
        onTakePhoto={(dataUri) => handleTakePhoto(dataUri)}
        onCameraError={(error) => handleCameraError(error)}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
        idealResolution={{ width: 640, height: 480 }}
        imageType={IMAGE_TYPES.JPG}
        imageCompression={0.97}
        isMaxResolution={true}
        isImageMirror={false}
        isFullscreen={true}
      />

      {photos.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Captured Photos:</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "15px",
              marginTop: "10px",
            }}
          >
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Captured ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
