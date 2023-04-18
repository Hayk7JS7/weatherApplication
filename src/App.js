import './App.css';
import Cityweatherinput from './input/Cityweatherinput';
import coldbg from './Assets/coldbg.jpeg'
import { useState } from 'react';



function App() {
  const [img, setImg] = useState(coldbg)
  return (
    <div className="App" >
      <div className='imageContainer'><img width='100%' height='100%' src={`${img}`}/></div>
          <div className='input'>
            <p className='title'>Weather</p>
            <Cityweatherinput/>
          </div>
        </div>
  )
}

export default App;
