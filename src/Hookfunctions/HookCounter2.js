import React, {useState} from 'react'

function HookCounter2(){
    let initialcount=0;
    let[count,setCount]=useState(initialcount)
    // const increFive= ()=>{
    //     for(let i=0; i<5;i++)
    //     {
    //         setCount(myprev => myprev+5)
    //     }
    // }

    return(
        <div>
            Count:{count}
            <button onClick={()=> setCount(initialcount)}>Reset</button>
            <button onClick={()=> setCount(prevCount =>prevCount+1)}>Increment</button>
            <button onClick={()=> setCount(prevCount => prevCount-1)}>Decrements</button>
            {/* <button onClick={increFive}>Increment 5</button> */}
            <button onClick={()=> setCount(prevCount => prevCount+5)}>Increment 5</button>
        </div>
    )
}

export default HookCounter2