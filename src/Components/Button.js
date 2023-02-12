import React from 'react';
/* class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        var {change1:currentchange,lang1:currentlang} = this.props
        var {change1:nextchange,lang1:nextlang}=nextProps
        if(currentchange===nextchange && currentlang===nextlang){
            return false;
        }
        else{
            return true;
        }
    }
    render(){
        
        var {change1,lang1}=this.props;
        return(
            <button type="button" onClick={()=>{change1(lang1)}}>
                {lang1==="bn-BD"?"it is english":"it is bengali"}
            </button>
        )
    }
}
export default Button; */
/* class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        var {change1:currentchange,lang1:currentlang} = this.props
        var {change1:nextchange,lang1:nextlang}=nextProps
        if(currentchange===nextchange && currentlang===nextlang){
            return false;
        }
        else{
            return true;
        }
    }
    render(){
        
        var {change1,lang1,show}=this.props;
        return(
            <div>
                <button type="button" onClick={()=>{change1(lang1)}}>
                        {lang1==="bn-BD"?"it is english":"it is bengali"}
                </button>
                {show && <p>hello</p>}
            </div>
        )
    }
}
export default Button; */
class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        var {change1:currentchange,lang1:currentlang} = this.props
        var {change1:nextchange,lang1:nextlang}=nextProps
        if(currentchange===nextchange && currentlang===nextlang){
            return false;
        }
        else{
            return true;
        }
    }
    render(){
        
        var {change1,lang1,show,en}=this.props;
        if(!en){
            return null    // for not rendering when "en" is false
        }
        return(
            <div>
                <button type="button" onClick={()=>{change1(lang1)}}>
                        {lang1==="bn-BD"?"it is english":"it is bengali"}
                </button>
                {show && <p>hello</p>}
            </div>
        )
    }
}
export default Button;