
import React, { Component } from 'react'
// class Component -- older version ------
/**
 * constructor
 * render()
 * life methods
 */

//function Component
/*
Hooks techniques
*/
class LoginAbi extends Component{

   constructor(props){ // first

    super(props)

    this.state={
  count:10
    }
   }
    
incrementCount1 =()=>{
this.setState(prevState => {
    return {count: prevState.count + 10}
})

}
        render(){ // second // this
            return(
              <div>

<button onClick={this.incrementCount1}> Clicked {this.state.count}  button</button>           
 </div>
        )
        }
}
export default LoginAbi