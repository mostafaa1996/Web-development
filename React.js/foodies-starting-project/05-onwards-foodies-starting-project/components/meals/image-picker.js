'use client';
import classes from "./image-picker.module.css";
import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";

export default function ImagePicker({label , name}) {
    const InputRef = useRef();
    const [Pickedimage, setPickedImage] = useState(null);
    function handlePickImage() {
        InputRef.current.click();
    }
    function handleOnChange(event) {
        const file = event.target.files[0];
        if(!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
            {Pickedimage && <div className={classes.preview}>
               <Image src={Pickedimage} alt="Your meal image inserted" fill />
            </div>}
            {!Pickedimage && <p>No image picked yet.</p>}
            <input type="file" 
                   className={classes.input} 
                   ref={InputRef}
                   id={name} 
                   name={name} 
                   accept="image/*" 
                   onChange={handleOnChange}
                   
            /></div>
            <button className={classes.button} 
            type="button" 
            onClick={handlePickImage}>
                Pick an Image
            </button>
        </div>
    );
}