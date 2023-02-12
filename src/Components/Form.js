
import React from 'react';
/* export default class Form extends React.Component{
    state={title:"JS"};
    func1 = (e) => {
        this.setState({
            title:e.target.value,
        });
       };
    render(){
        var {title} = this.state
         return(
             <div>
                 <form>
                     <input type="text" placeholder='enter text' 
                       value={title} onChange={this.func1}></input>
                 </form>
                 <p>{title}</p>
                 <span>{title}</span>
                 <h1>{title}</h1>
             </div>
         )
    }
} */
/* export default class Form extends React.Component{
    state={
        title:"JS",
        text:"JS is good",
        lib:"React",
        isAwesome:true
    };

    func1 = (e) => {
        if (e.target.type==="text"){
            this.setState({
                title:e.target.value,
            });
        }
        else if (e.target.type==="textarea"){
            this.setState({
                text:e.target.value,
            });
        }
        else if (e.target.type==="select-one"){
            this.setState({
                lib:e.target.value,
            });
        }
        else if (e.target.type==="checkbox"){
            this.setState({
                isAwesome:e.target.checked,
            });
        }

        };

        ssubmit = (e) =>{
            
            const {title,text,lib,isAwesome} = this.state
            e.preventDefault();
            console.log(title,text,lib,isAwesome)
        }
    
    render(){
        const {title,text,lib,isAwesome} = this.state
         return(
             <div>
                 <form onSubmit={this.ssubmit}>
                     <input type="text" placeholder='enter text' 
                       value={title} onChange={this.func1}></input>
                 
                 <br/>
                 <br/>
                 <textarea value={text} onChange={this.func1}></textarea>
                 
                 <br/>
                 <br/>
                 <select value={lib} onChange={this.func1} >
                     <option value="React">React</option>
                     <option value="Node">Node</option>
                 </select>
                 <br/>
                 <br/>
                 <input type="checkbox" checked={isAwesome} onChange={this.func1} ></input>
                 <br/>
                 <br/>
                 <input type="submit" value="submit"></input>
                 </form>

             </div>
         )
    }
} */
export default class Form extends React.Component{
    state={
        title:"JS",
        text:"JS is good",
        lib:"React"
        
    };

    func1 = (e) => {
        
        this.setState({
            [e.target.name]:e.target.value,
        });
        };

        ssubmit = (e) =>{
            
            const {title,text,lib} = this.state
            e.preventDefault();
            console.log(title,text,lib)
        }
    
    render(){
        const {title,text,lib} = this.state
         return(
             <div>
                 <form onSubmit={this.ssubmit}>
                     <input name="title" type="text" placeholder='enter text' 
                       value={title} onChange={this.func1}></input>
                 
                 <br/>
                 <br/>
                 <textarea name="text" value={text} onChange={this.func1}></textarea>
                 
                 <br/>
                 <br/>
                 <select name="lib" value={lib} onChange={this.func1} >
                     <option value="React">React</option>
                     <option value="Node">Node</option>
                 </select>
                 <br/>
                 <br/>
                 
                 <input type="submit" value="submit"></input>
                 </form>

                 <form>
                     <input type="text" value={null}></input>
                 </form>

             </div>
         )
    }
}