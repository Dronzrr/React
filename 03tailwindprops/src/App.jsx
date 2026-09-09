import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {


  return (
    <>
      <h1 className="text-white bg-green-400 p-4 rounded-xl">
        Tailwind is working!
      </h1>
      <Card title="unique design solutions" more="know more" />
      <Card title="new design solutions"/>
    </>
  )
}

export default App
