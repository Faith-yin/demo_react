import React, { Component } from 'react';
import './App.css';

// Button 组件
class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var themeColor = this.props.themeColor
    return (
      <div>
        <button style={{ color: themeColor }} onClick={() => this.props.handleClick('red')}>红色</button>
        <button style={{ color: themeColor }} onClick={() => this.props.handleClick('green')}>绿色</button>
        <button style={{ color: themeColor }} onClick={() => this.props.handleClick('orange')}>橘色</button>
      </div>
    )
  }
}

// Title 组件
class Title extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const themeColor = this.props.themeColor
    return (
      <h2 style={{ color: themeColor }}>标题</h2>
    )
  }
}

// App 组件
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      themeColor: ''
    }
  }
  handleClick(color) {
    // console.log(color);
    this.setState({
      themeColor: color
    })
  }
  render() {
    return (
      <div>
        <h1>APP</h1>
        <Title themeColor={this.state.themeColor}></Title>
        <Button themeColor={this.state.themeColor} handleClick={(color)=>this.handleClick(color)}></Button>
      </div>
    )
  }
}





export default App;
