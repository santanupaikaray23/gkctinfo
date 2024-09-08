import React from 'react';
import './listing.css';
 import { Link } from 'react-router-dom';


const ListingDisplay = (props) => {
    const renderList = ({listdata})=>{
        if(listdata){
            if(listdata.length>0){
                return listdata.map((item)=>{
                    return(
                        <div className='item'>
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img className='Image' src={item.image} alt=''/>
                                </div>
                                <div className='col-md-7'>
                                   <div className='service_name'> 
                                   <div className='type'>{item.name}</div>
                                   <div className='type1'> ଆପଣମାନଙ୍କ {item.name} ପାଇଁ ଆମେ Website / Application ତିଆରି କରି ପାରିବୁ ।</div>
                                 <Link to={`/booking/${item.name}`}><br/>Enquiry କରନ୍ତୁ ।</Link>
                                 <Link to={`/booking/${item.name}`}><br/>ରେଜିଷ୍ଟ୍ର କରନ୍ତୁ ।</Link>
                                
                                 </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <div className='cuisine'>Total Amount to Pay</div>
                                    <div className='cuisine'>Minimum Amount to Pay</div>

                                </div>
                                {/* <div className='col-sm-7'>
                                    <div className='cuisine_data'>
                                        {item.type.totalamount}
                                    </div>
                                    <div className='cuisine_data'>
                                        {item.type.minimumamount}

                                    </div>
                                </div> */}

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