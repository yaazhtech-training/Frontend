//Without Render Props

import { Component } from "react"

export default class MouseTracker extends Component{
    constructor(props){
        super(props);
        this.state ={ x:0,y:0};
    }

    handleMouseMove=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY,
        })
    }
    render(){
        return(
            <div style={{height:"100vh", width:"50vw"}} onMouseMove={this.handleMouseMove}>
                <div>Please Move the cursor</div>
                <h2>The mouse position is x :({this.state.x} and y :{this.state.y})</h2>
           <div>
               {this.props.render(this.state)}
           </div> 
            </div>
          
        );
    }
}
