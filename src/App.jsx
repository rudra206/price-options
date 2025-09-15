
import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'



function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-slate-400'>Vite + React</h1>
<PriceOptions></PriceOptions>

   <LineChart ></LineChart> 
   <Phones></Phones>


    </>
  )
}

export default App
