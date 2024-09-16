import './App.css'
import { Ayodhya } from './modules/3Drendering/pages/Ayyodya'
import { useDispatch } from 'react-redux'
import { startThreeSixty } from './features/360ViewSlice'
import ControllerLayout from './shared/components/Controller'

function App() {
 const dispatch = useDispatch()
 
  return (
    <>
      <div  onClick={()=>{dispatch(startThreeSixty());  console.log("testing")}} style={{position:"absolute", top:"40px",right:"60px", width:"40px",height:"40px",zIndex:1}}  >
     <img src='./360ViewIcon.png'  style={{height:"60px",width:"60px"}} />
     </div>
     <Ayodhya/>
     <ControllerLayout/>
    </>
  )
}

export default App
