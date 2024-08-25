import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props)=>{
   const listService = ({servicedata})=>{
    if(servicedata){
        return servicedata.map((item)=>{
            return(
                <Link to={`/list/${item._id}`}>
                    <div className='tileContainer'>
                        <div className='tileComponent1'>
                            <img src={item.image} alt=""/>

                        </div>
                        <div className='tileComponent2'>
                            <div className='componentHeading'>
                                {item.name}
                             </div>
                             <div className='componentSubHeading'>
                             ଆପଣମାନଙ୍କ {item.name} ପାଇଁ ଆମେ Website / Application ତିଆରି କରି ପାରିବୁ ।

                             </div>
                             (Click here)

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
        ଆମର Services 

        </p>
        {/* <p className='quickSearchSubHeading'>
            Provide Awesome Service With Our Tools

        </p> */}
        <br/>
        {listService(props)}
    </div>
   
   )
}
export default QuickDisplay;
