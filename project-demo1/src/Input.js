import React, {Component} from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }
  handleInput(e) {
    // console.log(e.target.value); // target：html 标签
    // console.log(e.nativeEvent); // 原生事件

    if(e.target.value.length > 10) {
      console.log("超过10位了！");
      return;
    }
    this.setState(
      {
        value: e.target.value
      }
    )
  }
  render() {
    return (
      <input type="text" onChange={(e)=>this.handleInput(e)} value={this.state.value} />
    )
  }
}