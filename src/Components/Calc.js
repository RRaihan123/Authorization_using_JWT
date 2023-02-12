import React from "react";
import {converter,tocel,tofar} from '../necessary/temp_conv';
import Boil from "./Boil";
import Tempinput from "./Tempinput"
export default class Calc extends React.Component{
    state = { temp : "", scale:""}
    change1 = (e,scale)=>{
        this.setState({
            temp:e.target.value,
            scale:scale
        })
    }
    render(){
        var {temp,scale} = this.state;
        var cel = scale==="f"?converter(temp,tocel):temp;
        var far = scale==="c"?converter(temp,tofar):temp;
        return(
            <div>
                <Tempinput scale="c" temp={cel} tempchange={this.change1} />
                <Tempinput scale="f" temp={far} tempchange={this.change1} />
                <Boil celsius={parseFloat(temp)}/>
            </div>
        )
    }

}
