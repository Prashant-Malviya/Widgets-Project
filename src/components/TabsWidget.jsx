import React, { useState } from 'react';
import AboutMe from './Tabs/AboutMe';
import Experience from './Tabs/Experience';
import Recomends from './Tabs/Recomends';

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('aboutMe');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2 bg-black px-3 py-3 rounded-3xl">
        {['aboutMe', 'experiences', 'recommended'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2  ${
              activeTab === tab ? 'bg-blue-600' : 'bg-black'
            } rounded-full text-white`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.replace(/([A-Z])/g, ' $1').toLowerCase()}
          </button>
        ))}
      </div>
      <div className="p-4 bg-gray-700 rounded-md">
        
        {activeTab === 'aboutMe' && <AboutMe />}
        {activeTab === 'experiences' && <Experience />}
        {activeTab === 'recommended' && <Recomends />}
      </div>
    </div>
  );
};

export default TabsWidget;
