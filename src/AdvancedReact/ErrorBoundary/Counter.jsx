
import React, { Component } from 'react'
// class Component -- older version ------
/**
 * constructor
 * render()
 * life methods
 */
// StateFull component

// important keyword ====== this

class Counter extends Component{

   constructor(props){ // first

    super(props)

    this.state={
  count:10,
  numbers : 1
    }
   }
    
incrementCount1 =()=>{
this.setState(prevState => { // updating state
    return {count: prevState.count + 10} //increase by 10
})

}
        render(){ // second // this
            if(this.state.count === 50){
                throw new Error("Count reached to 50")
            }
            return(
              <div>

<button onClick={this.incrementCount1}> Clicked {this.state.count}  button</button>           
 </div>
        )
        }
}
export default Counter