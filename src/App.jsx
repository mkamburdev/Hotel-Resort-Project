import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Gallery from './components/Gallery'
import ParallaxRooms from './components/ParallaxRooms'


function App() {

  return (
    <>
      <Header />
      <AboutUs />
      <ParallaxRooms/>
      <Services />
      <Gallery/>
    </>
  )
}

export default App