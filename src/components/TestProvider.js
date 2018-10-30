import React from 'react';

import connectFactory from '../services/connect';

export const context = React.createContext();

const { Provider } = context;

export class TestProvider extends React.Component {
  setData (data) {
    this.setState({
      data: {
        ...this.state.data,
        ...data,
      },
    });
  }

  state = {
    data: {},
    setData: data => this.setData(data),
  };

  render() {
    const { children } = this.props;
    const value = {...this.state};

    return (
      <Provider value={value}>
        {children}
      </Provider>
    );
  }
}

export const connect = connectFactory(context);

export default TestProvider;
