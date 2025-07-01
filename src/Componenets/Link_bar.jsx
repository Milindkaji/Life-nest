import React from 'react';
import { Link } from 'react-router-dom';
import Home1 from '../Pages/Home1';
import Habit from '../Pages/Habit';
const Link_bar = () => {
  return (
    <>
    <div className='flex flex-row items-center justify-center py-2 bg-amber-200 text-black font-semibold text-2xl'>
     <Link to={'/Home'} className='px-8'>Home</Link>
     <Link to={'/Hab'} className='px-8'>Habit Tracker</Link>
   
    <Link to={'/Notet'} className='px-8'>Notes Taking</Link>
    <Link to={'/Notet'} className='px-8'>Phone Number manager</Link>
    <Link to={'/Notet'}className='px-8'>Daily Planner</Link>
    <Link to={'/Contact'} className='px-8'>Contact Us</Link>
    </div>
    
    </>
  )
}

export default Link_bar
