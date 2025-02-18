import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Experience from './components/experience'
import Footer from './components/footer'
import Contact from './components/contact'
import toast, { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <>    <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <Contact></Contact>
    <Footer></Footer>
    </div>
    <Toaster />
    </>

  )
}

export default App
