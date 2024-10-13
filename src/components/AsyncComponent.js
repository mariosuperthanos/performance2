import React, {Component} from 'react';

// high order component(a component that returns another component):
export default  function asyncCompoenent(importComponent){
  class AsyncCompoenent extends Component{
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component,
      })
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component {...this.props} /> : null;
    }
  }
  return AsyncCompoenent;
  // comment
}