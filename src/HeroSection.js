import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import { init } from 'ityped';
import {Link} from 'react-router-dom';
import './HeroSection.css';
import { Button } from './components/Button';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart
}) {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false,
            strings: [ "ଆମେ Website ତିଆର କରୁ ।", "ଆମେ Application  ତିଆର କରୁ ।" ] 
        });
    }, []);

    return (
      
        <div className='imageContainer'>
            <div className='logo'>
                {/* Logo can go here */}
            </div>
            <div className='heading'>
                <div className='left'>
                    <div className='wrapper'>
                        <h5> &nbsp; </h5><br/><br/>
                         <p ref={textRef}></p><br/>
                        <p1>ଆପଣଙ୍କ ବେପାରକୁ Online ନିଅନ୍ତୁ ।
                            </p1><br/>
                        <Link to="/contact">
                              <Button buttonSize='btn--wide' buttonColor='blue'>ଆଜିହିଁ ଯୋଗାଯୋଗ କରନ୍ତୁ ।</Button>
                             </Link>
                    </div>
                    <div className='whatsapp_float'>
        <a href='https://wa.me/918917310896' target='_blank' rel="noreferrer" ><img src='assets/whatapp.jpg' width="50px" className="whatsapp_float_btn" alt='whatsapp' /></a>
      </div>
                </div>
            </div>
        </div>
        // <>
        // <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        //     <div className='container'>
        //         <div className='row home__hero-row'
        //         style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
        //             <div className='col'>
        //                 <div className='home__hero-text-wrapper'>
        //                     {/* <div className='top-line'>
        //                         {topLine}
        //                     </div>
        //                     <h1  className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
        //                     <p className={lightTextDesc? 'home__hero-subtitle':'home__hero-subtitle dark'}>{description}</p>
        //                     <Link to="/contact">
        //                         <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
        //                     </Link> */}
        //                 </div>
        //             </div>
        //             <div className='col'>
        //                 <div className='home__hero-img-wrapper'>
        //                     <img src={img} alt={alt} className='hero__hero-img'/>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>

        // </div>
        // </>
        
    
    );
}

export default HeroSection;