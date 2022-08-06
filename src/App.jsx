import { useRef,useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import NotFound from './pages/NotFound';
function App() {
  const [active,setActive] = useState(true)
  const hamburger = useRef()
  const nav = useRef()
  function hiddenNavbar() {
    setActive(active ? false : true)
  }
  console.log(nav);
  function closeNavbar(e){
    console.log(e);
  }

  
  useEffect(() => {
    
  },[])
   return (
    <>
      <header className='flex justify-between  relative container'>
        <h1 className='ml-5 md:ml-0 uppercase py-10 font-semibold'>Interior.co</h1>
        <button type='button' ref={hamburger} onClick={() => hiddenNavbar()} className={`${active ? 'block' : 'hidden'} hamburger mr-5 md:hidden`}>
          <span className='w-[40px] h-1 block my-2 bg-black'></span>
          <span className='w-[40px] h-1 block my-2 bg-black'></span>
          <span className='w-[40px] h-1 block my-2 bg-black'></span>
        </button>
        <nav ref={nav} onMouseOut={(e) => closeNavbar(e)} className={`${active ? 'translate-x-full' : 'translate-x-0'} md:translate-x-0  translate md:transition-none ease-out duration-500 gap-9 lg:gap-16 xl:gap-28 2xl:gap-36 flex items-center pt-10 md:pt-0 md:flex-row flex-col h-full md:h-auto  bg-white md:bg-transparent md:static fixed md:max-w-none max-w-[300px] md:w-auto w-full z-20 right-0`}>
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Favourites</Link>
          <Link to="#">Lifestyle</Link>
          <Link to="#">Get Started</Link>
          <Link className='md:hidden' to="#" onClick={hiddenNavbar} >
          <i className="uil uil-arrow-right text-4xl"></i>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
