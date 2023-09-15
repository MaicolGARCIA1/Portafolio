import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Home } from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import { Shop } from './components/Shop/Shop'

function App() {
  return (
    <>
    <Header/>
    <div className='App'>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path='/About' Component={About}></Route>
        <Route path='/Contact' Component={Contact}></Route>
        <Route path='/Shop' Component={Shop}></Route>
      </Routes>
    </div>  
    </>
    
  )
}
export default App