import React, { Component } from 'react';
import './App.css';
import Test from './Test'
import NewTest from './newTest'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRenderTest: false,
      isRenderNewTest: true
    }
  }
  render() {
    return (
      <div>
        {this.state.isRenderTest ? <Test></Test> : "不渲染Test"}
        <p>App-Test</p>
        <button type="button" onClick={() => this.setState({})}>App setState 更新</button>
        <button type="button" onClick={() => this.setState({ isRenderTest: !this.state.isRenderTest })}>切换Test渲染</button>

        <br/><hr/><br/>

        {this.state.isRenderNewTest ? <NewTest></NewTest> : "不渲染NewTest"}
        <p>App-NewTest</p>
        <button type="button" onClick={() => this.setState({})}>App setState 更新</button>
        <button type="button" onClick={() => this.setState({ isRenderNewTest: !this.state.isRenderNewTest })}>切换NewTest渲染</button>

      </div>
    )
  }
}


export default App;
