import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  static componentDidCatch(info, error) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1> Something went Wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
