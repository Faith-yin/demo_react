/**
 * React Router 中自定义 Link
 */

import React from 'react'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'


function CustomLink(props) {
  // React.Fragment 标签：不会在HTML中创建此标签，仅仅是个容器
  return (
    <Router>
      <React.Fragment>
        <WithRouterUserLink label="Home" to="/" />
        <WithRouterUserLink label="About" to="/about" />
        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </React.Fragment>
    </Router>
  )
}


const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

// 自定义 Link
const UserLink = (props) => {
  console.log(props);
  var isActive = props.to === props.location.pathname;
  // isActive && ">" 短路写法: 若 isActive 为 true，则会渲染 ">",反之则不会
  return (
    <div>
      <Link style={{ color: isActive ? "red" : "" }} to={props.to}>{isActive && ">"} {props.label}</Link>
    </div>
  )
}

// 高阶组件 withRouter 包装自定义 Link 之后，props 会有 match, location, history... 等属性
const WithRouterUserLink = withRouter(UserLink)





export default CustomLink;