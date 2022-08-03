import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
function App() {

  return (
    <>
      <header className='flex justify-between relative py-10 container'>
        <h1 className='ml-5 md:ml-0 uppercase font-semibold'>Interior.co</h1>
        <nav className='md:flex gap-9 lg:gap-16 : xl:gap-28 2xl:gap-36 hidden '>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/favourites">Favourites</Link>
          <Link to="/lifestyle">Lifestyle</Link>
          <Link to="/">Get Started</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
