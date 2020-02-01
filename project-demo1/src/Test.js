/**
 * ref 属性
 */


import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {
    console.log(this.inputNode);
  }

  render() {
    return (
      <div>
        <h1>ref 属性</h1>
        <input type="text" ref={node => this.inputNode = node} />
        <div ref={node => this.texthtml = node}>你好</div>

      </div>
    )
  }
}




export default Test;

