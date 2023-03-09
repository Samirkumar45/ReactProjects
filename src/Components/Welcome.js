// import React, { Component } from 'react'
import React from 'react'

// class Welcome extends Component{
//     render(){
//         const{name,Heroname}=this.props
//         return <h1> Welcome,{name} and {Heroname}</h1>

//     }
    
// }


function Welcome(props) {
  return (
    <div>
         <h1> Welcome, {props.name} and {props.Heroname}</h1>
    </div>
  )
}


export default Welcome;