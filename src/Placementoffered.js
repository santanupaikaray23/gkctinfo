import React, {Component} from 'react';
import PlacementofferedDisplay from './PlacementofferedDisplay';


const url = "http://localhost:9600/Placementoffered";

class Placementoffered extends Component{
    constructor(){
        super()

        this.state={
            placementofferedType:''
        }
    }
    render(){
        return(
            <PlacementofferedDisplay Placementoffereddata={this.state.placementofferedType}/>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({placementofferedType:data})
        })
    }
    
}
export default Placementoffered;