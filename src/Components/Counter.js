import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increamentCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.increamentCount)}</div>
    );
  }
}

export default Counter;
