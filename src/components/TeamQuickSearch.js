import React, {Component} from 'react';
import TeamDisplay from '../components/TeamDisplay';


 const url = "https://node-api-freelance.onrender.com/teams";

class TeamQuickSearch extends Component{
    constructor(){
        super()

        this.state={
            teamType:''
        }
    }
    render(){
        return(
           <TeamDisplay teamdata={this.state.teamType}/>
        )
    }

    componentDidMount(){
        fetch(url,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({teamType:data})
        })
    }

  
}
export default TeamQuickSearch;
