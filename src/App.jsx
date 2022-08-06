import { useRef,useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import NotFound from './pages/NotFound';
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
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
