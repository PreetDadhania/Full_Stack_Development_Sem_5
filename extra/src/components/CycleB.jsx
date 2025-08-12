import { Component } from "react";

class CycleB extends Component {
    constructor(props){
        console.log("CycleB constructor");
        super(props);
        this.state = {
            dept: "CSE"
        }
    }
    componentDidMount(){
        console.log("B - componentDidMount");
    }
    static getDerivedStateFromProps(props, state){
        console.log("B - getDerivedStateFromProps");
        return null; // or return an object to update state
    }
    render(){
        console.log("B - render");
        return (
            <div>
                <h1>Life Cycle Method</h1>
            </div>
        );
    }
}
export default CycleB;