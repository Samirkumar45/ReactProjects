import React,{Component} from "react";
import FRInputs from "./FRInputs";

class FRParentInputs extends Component {
    constructor(props){
        super(props)

        this.inputRef=React.createRef();
    }

    clickHandler= () =>{
        this.inputRef.current.focus();
    }
    render() {
        return(
            <div>
                <FRInputs ref={this.inputRef()}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInputs