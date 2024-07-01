import React, {Component} from 'react';
import QuickDisplay from '../components/QuickDisplay';


 const url = "https://node-api-freelance.onrender.com/services";

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            serviceType:''
        }
    }
    render(){
        return(
           <QuickDisplay servicedata={this.state.serviceType}/>
        )
    }

    componentDidMount(){
        fetch(url,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({serviceType:data})
        })
    }

  
}
export default QuickSearch;
