import React from 'react';
import './listing.css';
 import { Link } from 'react-router-dom';


const ListingDisplay = (props) => {
    const renderList = ({listdata})=>{
        if(listdata){
            if(listdata.length>1){
                return listdata.map((item)=>{
                    return(
                        <div className='item'>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img className='Image' src={item.image} alt=''/>
                                </div>
                                <div className='col-md-7'>
                                   <div className='service_name'> 
                                 <Link to={`/details/${item._id}`}>({item.name})</Link>
                                 <div className='type'>{item.type}</div>
                                 </div>
                                </div>

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
export default ListingDisplay;