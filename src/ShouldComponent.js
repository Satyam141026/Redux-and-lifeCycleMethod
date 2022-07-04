import React, { Component } from 'react'

export default class ShouldComponent extends Component {
    constructor(props){
        super();
        this.state={name:'satyam'}
    }
    changeName(){
        this.setState({name:'ram'})
    }
    shouldComponentUpdate(){
        return false /////this is component is return true than rendering is happen but is false return is stop the rendring 
    }
  render() {

    return (
      <div>ShouldComponent   {this.state.name}
      
      <button onClick={()=>{this.changeName()}}>ChangeState</button></div>
    )
  }
}
