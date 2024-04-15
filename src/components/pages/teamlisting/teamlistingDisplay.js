import React from 'react';
import './teamlisting.css';



const TeamListingDisplay  = (props) => {
    const renderList = ({teamlistdata})=>{
        if(teamlistdata){
            if(teamlistdata.length>0){
                return teamlistdata.map((item)=>{
                    return(
                        <div className='item'>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img className='Image' src={item.image} alt=''/>
                                </div>
                                <div className='type'>Designation : {item.designation}</div><br/>
                                <div className='type'>Name : {item.name}</div><br/>
                                <div className='type'>About : {item.about}</div><br/>
                                <div className='type'>Experience : {item.experience}</div><br/>
                                <div className='type'>Email : {item.email}</div>
                                <div className='type'>Phone : {item.phone}</div>

                            </div>
                        </div>
                    )
                })

            }else{
                return(
                    <div className="item">
                        <img src="/assets/loader.gif" alt=''/>
                    </div>
                )
              

            }
         
        }else{
              return(
                    <div className="item">
                        <h1>No Data Found</h1>
                    </div>
                )
           

        }
    }
    return(
     
        <div className='container-fluid'>
            <div className='main-heading'>
                <div className='col-md-12'>
                    {renderList(props)}
                </div>
            </div>
       
        </div>
    
    )
    
}
export default TeamListingDisplay ;