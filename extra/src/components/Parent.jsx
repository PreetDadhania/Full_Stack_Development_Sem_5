import { Component } from "react";
import CycleA from "./CycleA";
class Parent extends Component{
    constructor(props){
        console.log("A - constructor")
        super(props)
        this.state = {
            toggle : true
        }
    }
    chngMsg(){
        this.setState({
            toggle : !this.state.toggle
        })
    }
    render(){
        return(
            <div>
                <button onClick={() => this.chngMsg()}>ToggleButton</button>
                {this.state.toggle && <CycleA />}
            </div>
        )
    }
}
export default Parent;