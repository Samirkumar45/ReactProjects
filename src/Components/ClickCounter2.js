import React, { Component } from 'react';

class ClickCounter2 extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return <button onClick={increamentCount}>Repeat{count} times</button>;
  }
}

export default ClickCounter2;
