import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5) ;

  const addValue = () => {
    console.log("value added",Math.random());
    counter = counter + 1;
    if(counter <= 10){
      setCounter(counter);
    }
  }

  const subValue = () =>{
    console.log("value subtracted",Math.random());
    counter = counter - 1;
    if(counter >= 0){
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter calue: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br/>
      <button 
      onClick={subValue}
      >Remove value {counter}</button>
    </>
  )
}

export default App
