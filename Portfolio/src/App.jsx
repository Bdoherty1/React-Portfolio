import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-bl from-slate-900 to-gray-600 px-8 md:px-14 lg:px-36 pb-10 pt-7'>
        <Header/>
        <Hero/>
    </div>
  )
}

export default App
