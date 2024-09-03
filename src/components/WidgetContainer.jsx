import React from 'react';
import TabsWidget from './TabsWidget';
import GalleryWidget from './GalleryWidget';

const WidgetContainer = () => {
  return (
    <div className="w-1/2 p-6  text-white rounded-lg  space-y-8">
    <div className='bg-gray-700 p-10 rounded-2xl'>
    <TabsWidget />
    </div>
     
     <div className='bg-gray-700 p-10 rounded-2xl'>
      <GalleryWidget />
     </div>
    </div>
  );
};

export default WidgetContainer;
