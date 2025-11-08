"use client";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";


function CameraComponent () {
  return (
    <div>
      <Camera/>
    </div>
  )
}

export default CameraComponent
