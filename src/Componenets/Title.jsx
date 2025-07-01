import React from 'react';
import logo1 from '../assets/logo.png'; // Adjusted path based on your folder structure

const Title1 = () => {
  return (
    <div className='px-2 py-4 flex flex-col items-center'>
      <img src={logo1} alt="Logo" className=' h-20 w-auto'/>
    </div>
  );
};

export default Title1;
