import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './teamlisting.css';
import TeamlistingDisplay from '../teamlisting/teamlistingDisplay';

const url = "https://node-api-freelance.onrender.com/servicesdetail";

const Teamlisting = () => {
  const [servicesDetail, setServicesDetail] = useState([]);
  const { id } = useParams(); // This gets the `id` param from the URL

  useEffect(() => {
    axios.get(`${url}/${id}`)
      .then((res) => {
        setServicesDetail(res.data);
      })
      .catch((err) => {
        console.error("Error fetching service details:", err);
      });
  }, [id]);

  return (
    <div className='row'>
      <div className='col-md-12'>
        <TeamlistingDisplay teamlistdata={servicesDetail} />
      </div>
    </div>
  );
}

export default Teamlisting;