import './Header.css'
import { Navbar }from '../Navbar/Navbar'

export const Header = ()  => {
    return(
        <header>
            <div id='h'>
                <h1>Portafolio</h1>
            </div>
            <div id='hm'>
                <Navbar com='Home' path="/" />
                <Navbar com='About' path='About'/>
                <Navbar com='Services' path='Services'/>
                <Navbar com='Portafolio' path='Portafolio'/>
                <Navbar com='Contact' path='Contact'/>
            </div>
        </header>
     
    )
}

export default Header
