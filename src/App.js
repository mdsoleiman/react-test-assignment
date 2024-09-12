import React, { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState('about');
  const [galleryImages, setGalleryImages] = useState([]);
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Key for file input to reset it

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Create an image element with the file data URL
        const newImage = (
          <img
            key={galleryImages.length}
            src={reader.result}
            alt="Gallery"
            className="h-24 w-full object-cover rounded shadow-lg"
          />
        );
        // Update the galleryImages state
        setGalleryImages([...galleryImages, newImage]);
        // Reset the file input
        setFileInputKey(Date.now());
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'about':
        return <p>Hello! I’m Soleiman Qureshi, I have done my masters in MCA from Oriental Institute of Science and Technology.</p>;
      case 'experiences':
        return <p>I have no previous experience since I am a fresher.</p>;
      case 'recommended':
        return <p>Check out these recommended experiences...</p>;
      default:
        return <p>Select a tab to see content.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center">
      {/* Left Side - Empty (for responsiveness in laptops, hide in mobile) */}
      <div className="hidden md:block md:w-1/2"></div>

      {/* Right Side - Contains two widgets */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 p-4 md:p-6">

        {/* Top Widget (About Me, Experiences, Recommended) */}
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
          <div className="flex justify-between">
            <button
              className={`px-4 py-2 rounded-lg ${selectedTab === 'about' ? 'bg-blue-600' : 'bg-gray-700'}`}
              onClick={() => setSelectedTab('about')}
            >
              About Me
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${selectedTab === 'experiences' ? 'bg-blue-600' : 'bg-gray-700'}`}
              onClick={() => setSelectedTab('experiences')}
            >
              Experiences
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${selectedTab === 'recommended' ? 'bg-blue-600' : 'bg-gray-700'}`}
              onClick={() => setSelectedTab('recommended')}
            >
              Recommended
            </button>
          </div>
          <div className="mt-4">
            {renderContent()}
          </div>
        </div>

        {/* Bottom Widget (Gallery) */}
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Gallery</p>
            <label className="bg-blue-600 px-4 py-2 rounded-lg cursor-pointer">
              + Add Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                key={fileInputKey} // Use key to reset input
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
