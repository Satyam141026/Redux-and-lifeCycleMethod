import React, { Component } from 'react'

export default class ComponentDid extends Component {
    constructor(props){
        super(props);
        this.state={color:'sa'}
     
        console.log('ok const')

    }

    static getDerivedStateFromProps(props,state){
       
        return {color:props.color}//setState({color:props.color})
    }
    componentDidMount(){
     
        console.log('did')

    }
  render() {



    return (
      <div>ComponentDid  {this.state.color}
      
    
      </div>
    )
  }
}
