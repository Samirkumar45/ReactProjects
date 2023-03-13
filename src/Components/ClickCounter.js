import React, { Component } from 'react';
import UpdatedComponent from './withCounter';
class ClickCounter extends Component {
  render() {
    const { count, increamentCount } = this.props
    return (
      <div>
        <button onClick={increamentCount}>Click {count} Times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
