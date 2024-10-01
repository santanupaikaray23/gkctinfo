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
                                 
                                
                                 </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <div className='cuisine'>ସମ୍ପୂର୍ଣ Amount ଦେବାକୁ ହେବ :</div>
                                    <div className='cuisine'>Minimum Amount ଏବେ ଦେବାକୁ ହେବ :</div>

                                </div>
                                <div className='col-sm-7'>
                                    <div className='cuisine_data'>
                                        Rs.{item.total}
                                    </div>
                                    <div className='cuisine_data'>
                                       Rs.{item.Minimum}

                                    </div>
                                </div> 
                              
                            </div>
                            <Link to={`/enquiry/${item.name}`}><br/>Enquiry Now !</Link>
                                 <Link to={`/details/${item.name}`}><br/>Register Now !</Link>
                              
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