import React, { Component } from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url = "http://localhost:9600/booking";

class viewBooking extends Component {
    constructor(){
        super()

        this.state={
            booking:''
        }
    }
    render(){
        return(
            <BookingDisplay bookdata={this.state.booking}/>
        )
    }

    componentDidMount(){
        axios.get(url).then((res)=>{this.setState({booking:res.data})})
    }

}

export default viewBooking