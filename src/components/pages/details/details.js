import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./details.css";
const url = "https://node-api-freelance.onrender.com/check";

const Details = () => {
    const [check, setCheck] = useState('');
    const { id } = useParams(); // Directly obtaining `id` from URL parameters

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${url}/${id}`);
            setCheck(response.data[0]);
        };

        fetchData().catch(console.error);
    }, [id]);

    return (
       
            <div className='panel panel-primary'>
                <div className='panel-heading'>
                    <h7>{check.name}</h7>
                    <div className='panel-body'>
                        <div className='row'>
                              <div className='col-sm-12'>
                                <img className='img-responsive' src={check.image} style={{height:400,width:1400}} alt=''/>
                              </div>
                        </div>
                    </div>
                </div>
                <h6>Do you really want to take this service?</h6>
                <Link to="/" className="btn btn-danger">Back</Link>&nbsp;
            <Link to={`/booking/${check.name}`} className="btn btn-success">
                Proceed
            </Link>
            </div>
            
     
    );
};

export default Details;