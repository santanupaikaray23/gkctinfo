import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
       
        <div className='footer-container'>
        
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2> Additional Information</h2>
                    <Link>Near Smart Service Provider,Baniatangi,Odisha</Link>
                    </div>
                    <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link>Bhubaneswar, Odisha, India</Link>
                    <Link>info@gkctinfo.com</Link>
                    <Link>Phone no. 912417110</Link>
                    
            </div>
        </div>
        </div>
</div>

      
    )
}

export default Footer;