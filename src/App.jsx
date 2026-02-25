import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Heroslider from './components/Heroslider'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import AwardsSlider from './components/AwardsSlider'
import NetworkSection from './components/NetworkSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Heroslider/>
   <AboutSection/>
   <ServicesSection/>
   <AwardsSlider/>
   <NetworkSection/>
    </>
  )
}

export default App
