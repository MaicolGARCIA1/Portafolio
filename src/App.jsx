import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
    <div className='App'>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path='/About' Component={About}></Route>
        <Route path='/Contact' Component={Contact}></Route>
      </Routes>
    </div>  
    </>
    
  )
}
export default App