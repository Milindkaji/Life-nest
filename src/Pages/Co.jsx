import React from 'react';

import Footer from '../Componenets/Footer';
const Co = () => {
  return (
    <div>
      
    <h1 className='py-4 flex flex-row items-center align-center justify-center text-6xl font-extrabold'>Contact Us</h1>
    <div>
        <form className='space-x-3 px-8 flex flex-col items-start justify-start'>
            <h2>Full name</h2>
            <input type="text" placeholder='Your name'className='px-20 py-2 border-6 ' required/>
            <div className='py-3'>
                <h2>Your email ID</h2>
            <input type="email" placeholder='Email address'className='px-20 py-2 border-6 ' required/>

            </div>
            <div className='py-3'>
                <h2>Phone number</h2>
                <input type="number" placeholder='Phone number' className='px-20 py-2 border-6'required />
            </div>
            <div className='py-3 space-x-2'> 
                <h2>Your Queries</h2>
                <div className='flex flex-row space-x-2'>
                <textarea name="" id="message" placeholder='Enter your message' required className='border-6 px-15 py-2'>Enter your message</textarea>
            
            
                <button className='px-3 py-1 bg-black text-white rounded-3xl'>Submit</button>
                </div>
            </div>
            
        </form>
    </div>
    <Footer/>
    </div>
    
  )
}

export default Co
