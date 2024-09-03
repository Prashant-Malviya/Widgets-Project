import React, { useState } from 'react';
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

const GalleryWidget = () => {
  
  
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 

  // Function to handle image addition
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file); 
      setImages([...images, newImageURL]); 
    }
  };

 
  const triggerFileInput = () => {
    document.getElementById('imageInput').click();
  };

  // Function to handle "Next" button click
  const handleNext = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-md ">
      <div className="flex justify-between mb-10">
        <div className='text-white bg-black px-8 py-4 rounded-2xl'>
          <h2 className="text-xl">Gallery</h2>
        </div>
        <div className='flex flex-row space-x-5'>
          <button 
            className="px-3 py-1 ring-1 ring-slate-300  shadow-slate-300 shadow-md inner-shadow rounded-full text-white"
            onClick={triggerFileInput} 
          >
            + Add Image
          </button>
          
          <input
            type="file"
            id="imageInput"
            className="hidden"
            accept="image/*"
            onChange={handleAddImage} 
          />

          <div className="flex space-x-2">
            <button 
              className='px-3 py-3 bg-gray-800 rounded-full text-lg text-gray-200'
              onClick={handlePrevious}
              disabled={currentIndex === 0} 
            >
              <IoArrowBackSharp />
            </button>
            <button 
              className='px-3 py-3 bg-gray-800 rounded-full text-lg text-gray-200'
              onClick={handleNext}
              disabled={currentIndex + 3 >= images.length} 
            >
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
      
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div key={index} className="h-36 rounded-md">
            <img src={image} alt={`gallery-${index}`} className="h-full w-full object-cover rounded-3xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
