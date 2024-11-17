import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = "https://node-api-freelance.onrender.com/servicesdetails?name=";

class ProductDetails extends Component {
    constructor(){
        super()

        this.state={
            Details:''
        }
    }
    render(){
        return(
            <div className='container' style={{marginTop:-39}}>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>
                        <h3>{this.state.Details.name}</h3>

                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-12'>
<img className='img-responsive' src={this.state.Details.image} style={{height:210,width:1500}} alt='img'/>
                            </div>
<div className='col-md-6'>
    <h3>ଏହି ସର୍ଭିସ ପାଇଁ ଆପଣଙ୍କୁ ସମ୍ପୂର୍ଣ Amount ଦେବାକୁ ହେବ : Rs.{this.state.Details.total}</h3>
    <h3>ଏବେ Minimum Amount ଦେବାକୁ ହେବ : Rs.{this.state.Details.Minimum}</h3>
</div>
                        </div>
                        <Link to="/" className="btn btn-danger">Back</Link> &nbsp;
                        <Link to={`/booking/${this.state.Details.name}`} className="btn btn-success">Proceed
                        </Link>

                    </div>
                </div>
                </div>
        )
    }

    async componentDidMount(){
        let itemname = this.props.match.params.name;
        let response = await axios.get(`${url}${itemname}`);
        this.setState({Details:response.data[0]})
        sessionStorage.setItem('cost', '1000')
    }
}

export default ProductDetails;