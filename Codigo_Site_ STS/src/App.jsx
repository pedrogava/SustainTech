import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/navbar/NavbarComp';
import Carousels from './components/Carousels/carousels';
import Rodape from './components/Rodape/Rodape';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavbarComp/>
    


    <Rodape />


    </div>


    
  )
}

export default App
