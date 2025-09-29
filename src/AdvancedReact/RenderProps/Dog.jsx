import { Component } from "react";
import MouseTracker from "./MouseTracker";

export default class Dog extends Component{
    constructor(props){
        super(props);
        //this.state={name:"Dog", age:4};
    }
    render(){
        return(
            <div
           
            >
                {/* <img src="https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/" 
                alt="Dog" width="100px" height="100px"/> */}

                  <MouseTracker 
            render={(mouse)=>(
               <div
               style={{
                   position:"absolute",
                   left:`${mouse.x}px`,
                   top:`${mouse.y}px`
               }}>
                   <img src="https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/" 
                   alt="Dog" width="100px" height="100px"/>
               </div>
            )}
            />  
            </div>
          
         )
    }
}