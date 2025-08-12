import { Component } from "react";
import CycleB from "./CycleB";

class CycleA extends Component {
    constructor(props){
        console.log("CycleA constructor");
        super(props);
        this.state = {
            dept: "CSE"
        }
    }
    componentDidMount(){
        console.log("A - componentDidMount");
    }
    static getDerivedStateFromProps(props, state){
        console.log("A - getDerivedStateFromProps");
        return null; // or return an object to update state
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("A - shouldComponentUpdate");
        return true; // or false to prevent update
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("A - getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("A - componentDidUpdate");
        return null;
    }
    chngMsg(){
        this.setState({
            dept: "CSE-CSPIT"
        })
    }
    componentWillUnmount(){
        
    }
    render(){
        console.log("A - render");
        // console.log(this.state);
        // console.log(this.props);
        return (
            <div>
                <h1>Life Cycle Method</h1>
                {/* <CycleB /> */}
                <button onClick={() => this.chngMsg()}>Change MSG</button>
            </div>
        );
    }
}
export default CycleA;