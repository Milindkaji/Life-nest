import React from 'react';
import Map from '../Componenets/Map'

const Footer = () => {
  return (
    <>
    <div className='bg-black text-white font-semibold text-1xl py-3'>
    <div className='flex felx-row items-start justify-start'>
      <h4>Contact Details</h4>
    </div>
    <ul style-type='disc' className='font-light px-2'>
      <li>Email: CEO123@Lifenest.np</li>
      <li>Phone no: 9803262367</li>
      <li>Linkedin: Life Nest</li>
      <li>Instagram: nest_life</li>
    </ul>
    <div>
      
    </div>
    
    <div className='py-2'>
      <Map/>
    </div>
    <div className='flex flex-row items-center justify-center bg-black text-white font-bold'>
      
      <h4>©Milindkaji Rajopadhyaya</h4>
    </div>
</div>
</>  
)
}

export default Footer
