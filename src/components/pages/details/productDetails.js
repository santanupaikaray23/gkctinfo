import React, { Component } from 'react';
import axios from 'axios';
import { Details } from '@material-ui/icons';

const url = "http://localhost:9600/servicesdetails?name=";

class ProductDetails extends Component {
    constructor() {
        super();

        this.state = {
            Details: {} // Initialize as an object to avoid undefined errors
        };
    }

    async componentDidMount() {
        try {
            let itemname = this.props.match.params.name;
            let response = await axios.get(`${url}${itemname}`);
            if (response.data && response.data.length > 0) {
                this.setState({ Details: response.data[0] });
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }

    render() {
       
        
        return (
            <div className="container">
                <div className='panel panel-primary'>
                    <div className="panel-heading">
                        <h3>{this.state.Details.name}</h3>
                    </div>
                    <div className='panel-body'>
                      <div className="row">
                        <div className='col-md-12'>
                          <img className='img-responsive' src={Details.image} style={{height:400,width:1000}} alt='img'/>
                        </div>

                      </div>
                      </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;