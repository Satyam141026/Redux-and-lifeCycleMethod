import { initialData } from "./Data";

export const rootReducer=(oldState=initialData,action)=>{
    var newState=oldState;

switch (action.type) {
  case 'abc':
 
      newState={
      ...newState,
      name:action.name,
      fname:action.fname 
     } 

    return newState

  case 'xyz':
 console.log(action)
      newState={
      ...newState,
      name:action.name,
      fname:action.fname 
     } 

    return newState
  default:
    break;
}

    return newState;

}