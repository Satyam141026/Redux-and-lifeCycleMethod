import React from 'react'
import {connect} from 'react-redux'
import { apiCalling } from './action'

const ConnectM = (props) => {
    const changeName=()=>{
 
        props.b()
 

    }

  return (
    <div>
              {props.mystore.name}
              {props.mystore.fname}
        <button onClick={(e)=>{changeName(e)}}>Click here to change Name</button>

    </div>
  )
}
let mapStateToProps=(state)=>{
    console.log(state)
    return {
        mystore:state
      };
    
}
let mapDispatchToProps=(dispatch)=>{
    return {
        a:function(){ 
          dispatch({type:'abc',name:'jaya',fname:'kanno'})
                    },
        b:()=>{ 
          dispatch(apiCalling())
                    }
                  }
  
  

}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectM);