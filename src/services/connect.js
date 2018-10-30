import React from 'react';

export const connect = ({ Consumer }) => mapContextToProps => WrappedComponent => {
  class Connect extends React.Component {
    state = {};
  
    componentDidMount() {
      this.updateFromContext();
    }
  
    componentDidUpdate ({ context: prevContext}) {
      if (this.props.context !== prevContext) {
        this.updateFromContext();
      }
    }

    getNewState(context) {
      const state = mapContextToProps(context);
      const hasChanged = Object.keys(state).reduce((hasChanged, key) =>
        hasChanged || state[key] !== this.state[key], false);
      return hasChanged ? state : false;
    }
  
    updateFromContext() {
      const state = this.getNewState(this.props.context);
  
      if (state) {
        this.setState(state);
      }
    }

    shouldComponentUpdate ({ context }) {
      return !!this.getNewState(context);
    }
  
    render () {
      return <WrappedComponent {...this.state} />
    }
  }

  return () => <Consumer>{value => <Connect context={value} />}</Consumer>;
}
  


export default connect;
