import React from 'react';

import { context } from './TestProvider';

export class InjectData extends React.Component {
  static contextType = context;

  onChange = ({ target: { value } }) => {
    try {
      const json = JSON.parse(value);
      this.context.setData(json)
    } catch (e) {}
  }

  render () {
    const { onChange } = this;

    return (
      <textarea
        style={{ width: '100%', height: '5rem' }}
        placeholder="Type some JSON with a `foo` property"
        onChange={onChange}></textarea>
    )
  }
}

export default InjectData
