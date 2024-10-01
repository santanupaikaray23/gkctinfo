import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';


const url = "https://node-api-freelance.onrender.com/servicesdetail";

class ListingApi extends Component{
    constructor(){
        super()

        this.state={
          servicesDetail:''
        }
    }

   

    render(){
      return (
        <div className='row'>
          <div className='col-md-12'>
            <ListingDisplay listdata={this.state.servicesDetail} />
          </div>
        </div>
      );
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        sessionStorage.setItem('Id',id)
        axios.get(`${url}/${id}`)
        .then((res) => {this.setState({servicesDetail:res.data})})
    }
}

export default ListingApi