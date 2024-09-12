import React, { useState } from 'react';

const Gallery = () => {
  
  const [images, setImages] = useState([
    'https://picsum.photos/id/1/200/300',

  ]);

 
  const addImage = () => {
    
    const newImage = `https://picsum.photos/id/1/200/300`;
    setImages([...images, newImage]);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex justify-between">
        <p>Gallery</p>
        <button className="bg-blue-600 px-4 py-2 rounded" onClick={addImage}>
          + Add Image
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-700 h-24 rounded">
            <img src={image} alt={`Gallery ${index}`} className="w-full h-full object-cover rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
