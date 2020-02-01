import React, { Component } from 'react';

export default class NewTest extends Component {
  constructor(props) {
    super(props)
    console.log('constructor');
    this.state = {
      time: new Date()
    }
    // 定义计时器
    this.newTimeId = setInterval(()=>this.newTick(),1000);
  }

  newTick() {
    this.setState({
      time: new Date()
    })
  }

  static getDerivedStateFromProps() {
    console.log('静态生命周期函数 getDerivedStateFromProps');
    // 函数返回结果将会被附加至 state 内容中，若返回 null，则不会添加内容
    return null;
  }

  getSnapshotBeforeUpdate() {
    console.log('更新前获取快照 getSnapshotBeforeUpdate');
    // 函数返回结果可以在 componentDidUpdate 参数info 中接收
    return ('from getSnapshotBeforeUpdate...');
  }

  
  componentDidMount() {
    console.log('组件已经加载 componentDidMount');
  }
  
  shouldComponentUpdate() {
    console.log('组件是否应该更新 shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate(prevProps, prevState, info) { 
    //此处 info 参数是 getSnapshotBeforeUpdate 函数返回值的内容
    console.log('组件已经更新完毕 componentDidUpdate');
    console.log(info);
  }
  
  componentWillUnmount() {
    console.log('组件将要卸载 componentWillUnmount');
    clearInterval(this.newTimeId);
  }
  
  
  render() {
    console.log('render', this.state);
    return (
      <div style={{ border: "dotted black 1px" }}>
        <p>NewTest</p>
        <p>{ this.state.time.getSeconds() }</p>
        <button type="button" onClick={()=>this.setState({})}>setState</button>
        <button type="button" onClick={()=>this.forceUpdate()}>forceUpdate</button>
      </div>
    )
  }

}


