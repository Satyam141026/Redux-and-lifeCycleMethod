export const apiCalling=()=>{
    return async (dispatch)=>{

      const data= await fetch('https://fakestoreapi.com/products/1')
        .then((res)=>{
            
            return res.json()})
        .then((data)=>{console.log(data)
            dispatch({type:'xyz',name:data.title,fname:'kanno'})
        
        })
        .catch((e)=>{console.log(e)})

    }

    
}