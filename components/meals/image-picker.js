"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imageRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png,image/jpeg"
          name={name}
          ref={imageRef}
          value={pickedImage}
          onChange={handleImageChange}
        ></input>
        <button
          className={classes.button}
          type="button"
          onClick={handleImageClick}
        >
          Add Profile Picture
        </button>
      </div>
    </div>
  );
}
