import './App.css'

import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'
import Menu from './components/Menu'
import Container from './components/Container'

function App() {

  return (
    <div className="App">
        <Menu/>
        <SideBar/>
        <Outlet/>
        
        

    </div>
  )
}

export default App
