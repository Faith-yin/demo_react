/**
 * React Router 阻止默认行为链接跳转
 */

import React from 'react'
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom'


function PreventLink(props) {
  // React.Fragment 标签：不会在HTML中创建此标签，仅仅是个容器
  return (
    <Router>
      <React.Fragment>
        <ul>
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/one">One</Link>
          </li>
          <li>
            <Link to="/two">Two</Link>
          </li>
        </ul>

        <Route exact path="/" component={Form}></Route>

        <Route exact path="/one" render={() => (
          <h2>这里是 One 页面！</h2>
        )}></Route>

        <Route exact path="/two" render={() => (
          <h2>这里是 Two 页面！</h2>
        )}></Route>
      </React.Fragment>
    </Router>
  )
}


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isBlocking: false,
    }
  }
  render() {
    const { isBlocking } = this.state
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        alert("进行表单提交后续操作...")
      }}>
        <Prompt when={isBlocking} message="你确定要放弃这个表单，跳转到其他页面吗？"></Prompt>
        <label>
          <h3>当前状态是否阻止跳转？</h3>
          <p>{isBlocking ? "YSE，现在处于阻止模式！" : "NO，现在不阻止。"}</p>
          <input type="text"
            placeholder="请输入一些内容"
            onChange={(event) => {
              // console.log(event);
              this.setState({
                isBlocking: event.target.value.length > 0
              })
            }}
          />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}




export default PreventLink;