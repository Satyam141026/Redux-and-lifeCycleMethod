import React, { Component } from 'react'

export default class GetSnapShotExample extends Component {
    constructor(props){
        super();
        this.state={name:'jaya'}
    }
componentDidMount(){
 
  setTimeout(()=>{ this.setState({name:'ram'})

},2000)
}
     getSnapshotBeforeUpdate(prevProps,prevState){
      alert(prevState.name)
        return prevState.name

    }
    componentDidUpdate(){
   alert("after value"+this.state.name)
    } 
   
  render() {
    return (
      <>GetSnapShot 
     
         <h1>GetSnapShot {this.state.name}</h1>
      </>
    )
  }
}
