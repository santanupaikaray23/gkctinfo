import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
       
        <div className='footer-container'>
        
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2> ଯୋଗା ଯୋଗ ଠିକଣା </h2>
                    <Link>କଲେଜ ଛକ ପାଖ , ନିରାକାରପୁର, ଖୋରଡ଼ା, ଓଡିଶା, ୭୫୨୦୧୯</Link>
                    </div>
                     <div className="footer-link-items">
                     <h2>ଅଧିକ ସୂଚନା </h2>
                    <Link>naturewithcode@gmail.com</Link>
                    <Link>Phone no. 9668348106</Link>
                    
            </div>  
        </div>
        </div>
</div>

      
    )
}

export default Footer;