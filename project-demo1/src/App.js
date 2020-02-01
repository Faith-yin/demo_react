import React, {Component} from 'react';
import './App.css';
import Button, { Title } from './Button'
import Input from './Input'

// 类方式
class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{ color: "white", backgroundColor: "black" }}>导航栏</div>
    )
  }
}

// 函数方式
const Inputmine = function() {
  return (
    <input type="text" placeholder="这是Input组件中的input"/>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      like: false
    }
  }
  handleClick() {
    this.setState(
      {
        like: !this.state.like
      }
    )
  }
  render() {
    // JSX 中的 render 函数用于将 jsx 渲染 DOM 到页面中：
    // A、在 React 组件（类）中是必须是要实现的
    // B、render 函数只在 state 改变后才触发

    var name = "小明"
    var arr = ['yyy','ppp','fff',111,222]

    console.log("render 函数触发了...");

    return (
      // 返回的 JSX 只能有一个根节点
      <div>
        <button type="button" style={this.state.like ? {color: "red"} : {color: "black"}}
          onClick={ () => this.handleClick() }>
          {
            this.state.like ? "已赞" : "喜欢"
          }
        </button>

        <hr/>

        // 标签内样式的书写 和 三元运算符的书写：
        <h1 style={{ color: 'red' }}>这是我的第一行 React 代码，开心呀！</h1>

        <h2>{ name }</h2>
        <h3>{ name === '小明' ? "这是小明" : "这不是小明" }</h3>

        <hr/>

        // JS 的 forEach 和 map 方法都是 ES5 为处理数组而新增的迭代方法，区别在于 map 方法返回一个新数组，而 forEach 方法没有返回值
        <h4>
          { arr.map( (item,index) => {
            return <li key={index}>{item} -- {index}</li>
          }) }
        </h4>

        <hr/>

        // 大写开头的标签表示引入自身定义的组件：
        // 1-自闭合中间不能插入子组件
        // 2-非自闭合中间可插入子组件<br/><br/>
        <Nav />
        <Inputmine />

        <hr/>

        // 从 Button.js 中引入组件：利用 props 实现组件的嵌套<br/>
        <Title title="标题">
          <p>这是一个 props 传递的 title</p>
          <Button name="点击百度"></Button>
          <Button name="点击京东"></Button>
          <Button name="点击搜狗"></Button>

          <Button></Button>
        </Title>

        <hr/>

        // 从 Input.js 中引入组件<br/><br/>
        <Input />
        
      
      </div>
    )
  }
}

export default App;
