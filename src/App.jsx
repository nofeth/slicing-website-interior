import { useRef,useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
function App() {
  const [active,setActive] = useState(true)
  const hamburger = useRef()
  function hiddenNavbar() {
    setActive(active ? false : true)
  }
  useEffect(() => {

  },[])
   return (
    <>
      <header className='flex justify-between relative  container'>
        <h1 className='ml-5 md:ml-0 uppercase py-10 font-semibold'>Interior.co</h1>
        <button type='button' ref={hamburger} onClick={() => hiddenNavbar()} className='hamburger block mr-5'>
          <span className='w-[40px] h-1 block my-2 bg-black'></span>
          <span className='w-[40px] h-1 block my-2 bg-black'></span>
          <span className='w-[40px] h-1 block my-2 bg-black'></span>
        </button>
        <nav className={`${active ? 'translate-x-full' : 'translate-x-0'} translate ease-out duration-500 md:flex gap-9 lg:gap-16 xl:gap-28 2xl:gap-36 flex items-center pt-10 flex-col h-full bg-white fixed max-w-[300px] w-full z-20 right-0`} hidden={active}>
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Favourites</Link>
          <Link to="#">Lifestyle</Link>
          <Link to="#">Get Started</Link>
          <Link to="#" onClick={hiddenNavbar} >
          <i className="uil uil-arrow-right text-4xl"></i>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
