import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'


class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string,
    handleChangeThemeColor: PropTypes.func
  }
  render() {
    // console.log(this.props);
    // console.log(this.context);
    const themeColor = this.context.themeColor
    return (
      <h1 style={{ color: themeColor }}>大标题</h1>
    )
  }
}


class Button extends Component {
  static contextTypes = {
    themeColor: PropTypes.string,
    handleChangeThemeColor: PropTypes.func
  }
  render() {
    // console.log(this.props);
    // console.log(this.context);
    const {themeColor, handleChangeThemeColor} = this.context
    return (
      <div>
        <button style={{color: themeColor}} onClick={()=>handleChangeThemeColor('red')}>Red</button>
        <button style={{color: themeColor}} onClick={()=>handleChangeThemeColor('green')}>Green</button>
      </div>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      themeColor: 'orange'
    }
  }
  static childContextTypes = {
    themeColor: PropTypes.string,
    handleChangeThemeColor: PropTypes.func
  }
  handleChangeThemeColor(color) {
    this.setState({
      themeColor: color
    })
  }
  getChildContext() {
    return {
      themeColor: this.state.themeColor,
      handleChangeThemeColor: (color)=>this.handleChangeThemeColor(color)
    }
  }
  render() {
    return (
      <div>
        <Title></Title>
        <Button></Button>
      </div>
    )
  }
}


export default App;
