import { Link } from 'react-router-dom';
// import {Mail,Person} from "@material-ui/icons";
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import React, { useState } from 'react';
// import { Button } from '../components/Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    // const [setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)  
    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
               <img src="assets/Nature With Code logo.jpg" alt=""/> 
       </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {/* Here, we directly render the icon component based on the state */}
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                   
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>

       
                        <li className='nav-item'>
       
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                        </li>
                        
       
                        <li className='nav-item'>
  
                        <Link to='/service' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                        </li>
                        
       
   
       {/* <li className='nav-item'>
                        <Link to='/internship-training' className='nav-links'>
                            Internship & Training
                        </Link>
                        
       
       </li>  */}
   <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                        </li>
                        
       

    
      </ul>
      
        </div>

        </nav>
        </IconContext.Provider>
  )

}

export default Navbar;
