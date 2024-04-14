import React from 'react';
import './CareerQuickSearch.css';
import {Link} from 'react-router-dom';

const CareerDisplay = (props)=>{
   const listService = ({servicedata})=>{
    if(servicedata){
        return servicedata.map((item)=>{
            return(
                <Link to={`/careerlist/${item._id}`}>
                    <div className='tileContainer'>
                        <div className='tileComponent1'>
                            <img src={item.image} alt=""/>

                        </div>
                        <div className='tileComponent2'>
                            <div className='componentHeading'>
                                {item.name}
                             </div>
                           

                        </div>
                    </div>
                    </Link>
            )
        })
    }

   }
   return(
    <div className='quickSearchContainer'>
        <p className='quickSearchHeading'>
        Job Openings

        </p>
       
        <br/>
        {listService(props)}
    </div>
   
   )
}
export default CareerDisplay;
