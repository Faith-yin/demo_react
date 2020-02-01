import React, { Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props)
    console.log('constructor');
    this.state = {
      time: new Date()
    }
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  // 创建生命周期
  componentWillMount() {
    console.log('组件将要加载 componentWillMount');

    // 定义计时器
    this.timeId = setInterval(() => this.tick(), 1000)
  }
  componentDidMount() {
    console.log('组件已经加载 componentDidMount');
  }

  // 更新生命周期
  componentWillReceiveProps() {
    console.log('组件将要接收参数 componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('组件是否应该更新 shouldComponentUpdate');

    console.log(nextState);
    if (nextState.time.getSeconds() % 2 == 0) {
      return true
    }
    return false;
  }
  componentWillUpdate() {
    console.log('组件将要更新 componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('组件已经更新完毕 componentDidUpdate');
  }

  // 卸载生命周期
  componentWillUnmount() {
    console.log('组件将要卸载 componentWillUnmount');

    // 清除计时器
    clearInterval(this.timeId)
  }


  render() {
    console.log('render');
    return (
      <div style={{ border: "dotted black 1px" }}>
        <p>Test</p>
        <p>{this.state.time.getSeconds()}</p>
        <button type="button" onClick={() => this.setState({})}>setState 更新</button>
        <button type="button" onClick={() => this.forceUpdate()}>forceUpdate 更新</button>
      </div>
    )
  }


}
// 组件有两种更新方式：
    // setState：具有 shouldComponentUpdate() 函数
    // forceUpdate：不具有 shouldComponentUpdate() 函数
// 组件会随父组件的更新而更新



