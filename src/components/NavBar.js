import logo from '../img/Bilder/Logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div className='navBar'>
            <img src={logo} alt="logo" />
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
            </div>
        </div>

    );
}

export default NavBar;