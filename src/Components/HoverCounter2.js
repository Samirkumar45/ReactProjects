import React, { Component } from 'react';

export class HoverCounter2 extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return <h2 onMouseOver={increamentCount}>Repeat {count} times</h2>;
  }
}

export default HoverCounter2;
