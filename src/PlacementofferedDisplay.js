import React from 'react';
import './Placementoffered.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Placementoffered =(props)=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const listPlacementoffered = ({Placementoffereddata})=>{
        if(Placementoffereddata){
            return Placementoffereddata.map((item)=>{
                return(
                   <div className='check'>  
                    
                    <Carousel showDots={true} responsive={responsive}>
  <div className='card'>
  <img src={item.image1} alt=""/>
   <p3>{item.name1}</p3>
  <h3>Placed in {item.company1}</h3>
  <p3>Opinion : {item.opinion1}</p3>
  
  </div>
  <div className='card'>
  <img src={item.image2} alt=""/>
  <p3>{item.name2}</p3>
  <h3>Placed in {item.company2}</h3>
  <p3>Opinion : {item.opinion2}</p3>

  </div>
  <div className='card'>
  <img src={item.image3} alt=""/>
  <p3>{item.name3}</p3>
  <h3>Placed in {item.company3}</h3>
  <p3>Opimion: {item.opinion3}</p3>

  </div>
  <div className='card'>
  <img src={item.image4} alt=""/>
  <p3>{item.name4}</p3>
  <h3>Placed in {item.company4}</h3>
  <p3>Opimion: {item.opinion4}</p3>

  </div>
  <div> </div>
</Carousel>
<hr/>
                </div>  
                
                 
                    
                    
                )
            })
        }
    }
    return(
     
        <div className='placementofferedContainer'>
            <p className='placementofferedHeading'>
                Placement offered By Us
            </p>
            
            <br/>
            {listPlacementoffered(props)}
        </div>
    
    )
}
export default Placementoffered;