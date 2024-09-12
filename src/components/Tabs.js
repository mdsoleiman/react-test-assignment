import React from 'react';

const Tabs = ({ selectedTab, setSelectedTab }) => {
  const renderContent = () => {
    switch (selectedTab) {
      case 'about':
        return <p>Hello! I’m Dave, your sales rep...</p>;
      case 'experiences':
        return <p>I’ve been working at Salesforce for 3 years...</p>;
      case 'recommended':
        return <p>Check out these recommended experiences...</p>;
      default:
        return <p>Select a tab to see content.</p>;
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex flex-col space-y-4">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${selectedTab === 'about' ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => setSelectedTab('about')}
        >
          About Me
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedTab === 'experiences' ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => setSelectedTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`px-4 py-2 rounded ${selectedTab === 'recommended' ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => setSelectedTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
