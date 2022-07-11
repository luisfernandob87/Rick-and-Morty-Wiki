import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Locations from './components/Locations'
import Header from './components/Header'

function App() {


  return (
    <div className="App">
      <Header />
      <Locations/>
    </div>
  )
}

export default App
