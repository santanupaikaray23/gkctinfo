import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import { useParams } from 'react-router-dom';
import './listing.css';
const url = "https://node-api-freelance.onrender.com/servicesdetail";

const Listing = () => {
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
        <ListingDisplay listdata={servicesDetail} />
      </div>
    </div>
  );
}

export default Listing;