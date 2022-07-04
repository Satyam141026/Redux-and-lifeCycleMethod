import React, { Component } from 'react'

export default class ComponentUnmountExample extends Component {
constructor(props){
    super();
    this.state={show:true}

}
 A(){
    this.setState({
        show:false
    })
}
 
  render() {

    return (

      <div><h1>{
        this.state.show?<Son/>:console.log('nothing')}</h1>
        <button onClick={()=>{this.A()}}>DeleteChild</button>
       
      </div>
    )
  }
}

 class Son extends Component {
componentWillUnmount(){
alert("the child is to be deleted  process start ")
}
  render() {
    return (
      <div><h1>Son example</h1></div>
      
    )
  }
}

