import React from 'react';
import './TeamQuickSearch.css';
import {Link} from 'react-router-dom';

const TeamDisplay = (props)=>{
   const listTeam = ({teamdata})=>{
    if(teamdata){
        return teamdata.map((item)=>{
            return(
                <Link to={`/teamlist/${item._id}`}>
                    <div className='tileContainer'>
                        <div className='tileComponent1'>
                            <img src={item.image} alt="" />

                        </div>
                        <div className='tileComponent2'>
                            <div className='componentHeading'>
                                {item.name}
                             </div>
                             <div className='componentSubHeading'>
                                {item.designation}

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
        <p6>OUR TEAM</p6>
        <p className='quickSearchHeading'>
        Our Professionals

        </p>
        <p className='quickSearchSubHeading3'>
        Our professional helps a brand connect with potential customers over the 
        internet and increase its reach for a better business opportunity 

        </p>
        <br/>
        {listTeam(props)}
    </div>
   
   )
}
export default TeamDisplay;
