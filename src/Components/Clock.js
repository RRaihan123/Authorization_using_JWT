import React from 'react';
import Button1 from "./Button"

/* class Clock extends React.Component{  // it is a class component
    state={date1:new Date(),locale1:"en-US"}  // shortcut initialization
    componentDidMount(){
        this.timer1 = setInterval(()=>{ this.tick()},1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer1)
    }
    tick(){
        this.setState({
            date1 : new Date()
        })
    }
    func1 = (lang1) => {
        this.setState({
            locale1:lang1
        })
    }
    render(){
        
        var {date1,locale1} = this.state
        var button2;
        if(locale1==="en-US"){
            button2 = <Button1 change1={this.func1} lang1="bn-BD"/>
        }
        else{
            button2 = <Button1 change1={this.func1} lang1="en-US"/>
        }
        return (
            
            <div>
                <h1>
                    <span>{date1.toLocaleTimeString(locale1)}</span>
               </h1>
               {button2}
               
            </div>
        );
    }
}
export default Clock; */
/* class Clock extends React.Component{  // it is a class component
    state={date1:new Date(),locale1:"en-US"}  // shortcut initialization
    componentDidMount(){
        this.timer1 = setInterval(()=>{ this.tick()},1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer1)
    }
    tick(){
        this.setState({
            date1 : new Date()
        })
    }
    func1 = (lang1) => {
        this.setState({
            locale1:lang1
        })
    }
    render(){
        
        var {date1,locale1} = this.state
        
        return (
            
            <div>
                <h1>
                    <span>{date1.toLocaleTimeString(locale1)}</span>
               </h1>
               {locale1==="en-US"?<Button1 change1={this.func1} lang1="bn-BD" show={true}/>
                                 :<Button1 change1={this.func1} lang1="en-US" show={false}/>}
               
            </div>
        );
    }
}
export default Clock; */
class Clock extends React.Component{  // it is a class component
    state={date1:new Date(),locale1:"en-US"}  // shortcut initialization
    componentDidMount(){
        this.timer1 = setInterval(()=>{ this.tick()},1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer1)
    }
    tick(){
        this.setState({
            date1 : new Date()
        })
    }
    func1 = (lang1) => {
        this.setState({
            locale1:lang1
        })
    }
    render(){
        
        var {date1,locale1} = this.state
        
        return (
            
            <div>
                <h1>
                    <span>{date1.toLocaleTimeString(locale1)}</span>
               </h1>
               {locale1==="en-US"?<Button1 change1={this.func1} lang1="bn-BD" show={true} en={true}/>
                                 :<Button1 change1={this.func1} lang1="en-US" show={false} en={false}/>}
               
            </div>
        );
    }
}
export default Clock;