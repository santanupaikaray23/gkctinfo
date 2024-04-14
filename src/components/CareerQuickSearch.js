import React, {Component} from 'react';
import CareerDisplay from '../components/CareerDisplay';


 const url = "https://node-api-freelance.onrender.com/jobs";

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            jobType:''
        }
    }
    render(){
        return(
           <CareerDisplay servicedata={this.state.jobType}/>
        )
    }

    componentDidMount(){
        fetch(url,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({jobType:data})
        })
    }

  
}
export default QuickSearch;
