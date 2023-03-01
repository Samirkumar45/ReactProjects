import React from 'react'

// function FRInputs() {
//   return (
//     <div>
//         <input type="text"/>
//     </div>
//   )
// }

const FRInputs =React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})
export default FRInputs