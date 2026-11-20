import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Prjects from './components/Prjects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Prjects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App