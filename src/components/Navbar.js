import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './button'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const showButton= () => {
        if(window.innerHeight<=960){
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                BICYCLES <i className="fa-solid fa-bicycle"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact us
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
        </div>
     </nav>  
    </>
  )
}

export default Navbar