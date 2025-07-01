import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home1 from '../src/Pages/Home1';
import Link_bar from './Componenets/Link_bar';
import Habit from '../src/Pages/Habit';
import Co from '../src/Pages/Co';
import Notes from '../src/Pages/Notes';
import Title1 from './Componenets/Title';




export default function App() {
  return (
    <div className='App'>
    <Title1/>
    <Link_bar/>
   <Routes>
    <Route path='/Home' element={<Home1/>}/>
    <Route path='/Hab' element={<Habit/>}/>
    <Route path='/contact' element={<Co/>}/>
   <Route path='/Notet' element={<Notes/>}/>
   </Routes>
    </div>
  )
}