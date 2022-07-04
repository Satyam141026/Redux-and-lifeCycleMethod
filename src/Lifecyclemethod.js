import React, {Component} from 'react'
import A from './A'
import App from './App'
export default class Lifecyclemethod extends Component{
    constructor(){
        super()
        this.state={
            name:'sat',
            count:0,
            options:true
        }
    }
    static getDrivenStateFromProps(){
        console.log("drive")
        this.setState({name:'satyam'})
    }

componentDidMount(){
    console.log("did Mount")
}
shouldComponentUpdate(){
    console.log("should")
    return true
}
componentDidUpdate(){
    console.log("update")

}
componentWillUnmount(){
    console.log("unmount")

}





    render(){
        return(
            <div> hello{this.state.name}
            {this.state.count}
        {this.state.options?<App/>:<A/>  }
            <button onClick={(e)=>{this.setState({count:this.state.count+1})}}> Click Here</button>
            
            </div>
        )
}
}