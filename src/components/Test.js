import React from 'react';

import { connect } from '../components/TestProvider';

export const Test = ({ foo }) => console.log('TEST IS RENDERING') || (
  <p>{foo}</p>
);

export default connect(state => ({
  foo: state.data.foo,
}))(Test);
