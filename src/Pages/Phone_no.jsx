import React from 'react';
import Title1 from '../Componenets/Title';
import Link_bar from '../Componenets/Link_bar';
import Footer from '../Componenets/Footer';
const Phone_no = () => {
  return (
    <>
    <div>
      <Title1/>
      <Link_bar/>
      </div>
      <div className='flex flex-row items center justify-center text-6xl font-extrabold px-2 py-8'>
        <h1>Phone no Manager</h1>
        
      </div>
      <div className='flex flex-col items-center justify-center'>
          <form className='space-y-2'>
            <input type="text" placeholder="Enter contact name" className='text-1xl border-4 px-8 py-2'/><br />
            
          
            <input type="number" placeholder="Enter Phone number" className='text-1xl border-4 px-8 py-2 gap-3'/>
            <button className='px-3 py-3 bg-black text-white rounded-full gap-x-6'>Save</button>
          </form>
          
        </div>
      <div className='py-2'>
        <Footer/>
      </div>
    </>
  )
}

export default Phone_no
