import React,{ Component } from 'react';

class refsDemo extends Component {
    constructor(props)
    {
        super(props)

        this.inputRef=React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }

    clickHandler =() =>{
        alert(this.inputref.current.value)
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inputref}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default refsDemo;