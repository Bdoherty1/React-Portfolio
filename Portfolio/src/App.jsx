import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resmue from './components/Resmue'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-screen-lg min-h-screen px-8 pb-10 mx-auto bg-gradient-to-bl from-slate-900 to-gray-600 md:px-14 lg:px-36 pt-7'>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Resmue />
      <Contact />

      <SocialLinks />
    </div>
  )
}

export default App
