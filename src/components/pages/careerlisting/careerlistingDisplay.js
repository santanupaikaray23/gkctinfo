import React from 'react';
import './careerlisting.css';
import { Link } from 'react-router-dom';


const CareerlistingDisplay = (props) => {
    const renderCareerlist = ({careerlistdata})=>{
        if(careerlistdata){
            if(careerlistdata.length>1){
                return careerlistdata.map((item)=>{
                    return(
                        <div className='item'>
                            <div className='row'>
                                <div className='col-md-5'>
                                  <div className='type'>{item.name}</div><br/>
                                  <div className='type'>Required Skill : {item.skills}</div><br/>
                                  <div className='type'>Job Description : {item.description}</div><br/>
                                  <div className='type'>Responsibility : {item.responsibility}</div><br/>
                                  <div className='type'>Last Date for Apply : {item.date}</div><br/>
                                  <div className='type'> Job Status : {item.status}</div>
                                  
                                </div>
                                <div className='col-md-7'>
                                   <div className='service_name'> 
                                 <Link to={`/careerbooking/${item.name}`} >Apply Now !</Link>
                                 
                                 </div>
                                </div>

                            </div>
                        </div>
                    )
                })

            }else{
                return(
                    <div className="item">
                    <h1>No Data Found</h1>
                </div>
                )
              

            }
         
        }else{
              return(
                
                    <div className="item">
                    <img src="/assets/loader.gif" alt=''/>
                </div>
                )
           

        }
    }
    return(
     
        <div className='container-fluid'>
            <div className='main-heading'>
                <div className='col-md-12'>
                    {renderCareerlist(props)}
                </div>
            </div>
       
        </div>
    
    )
    
}
export default CareerlistingDisplay;