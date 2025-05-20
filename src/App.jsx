import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <Home />
    </div>
  )
}

export default App