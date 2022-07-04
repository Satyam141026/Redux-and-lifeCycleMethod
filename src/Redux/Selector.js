import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Selector(props) {
 
    const store=useSelector((state)=>{
       // console.log(state.name);
        return state
    })
    const dispatch=useDispatch()
    const changeName=()=>{
      dispatch({type:'abc',name:'jaya',fname:'alarm'})
 
    }

  return (
    <div>
        {store.name}{store.fname}
        <button onClick={(e)=>{changeName(e)}}>Click here to change </button></div>
  )
}
