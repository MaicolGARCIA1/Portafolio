import './Header.css'
import { Navbar }from '../Navbar/Navbar'

export const Header = ()  => {
    return(
        <header>
            <div id='h'>
                <h1 className='TituloP'>Portafolio</h1>
            </div>
            <div id='hm'>
                <Navbar com='Home' path="/" />
                <Navbar com='About' path='About'/>
                <Navbar com='Contact' path='Contact'/>
                <Navbar com='Shop' path='Shop'/>
            </div>
        </header>
     
    )
}

export default Header
