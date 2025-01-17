import { useState } from 'react'
import { useGlobalContext } from './Context'
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';


function App() {
  const {isSidebarOpen} = useGlobalContext();
  // console.log(isSidebarOpen)

  return (
    <main>
    
     <Navbar />
     <Hero />
     <Sidebar />
     <Submenu />
    </main>
  )
}

export default App
