/**
 * React Router 中 URL 的参数
 */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function App(props) {
  // 通过 about 和 info 可以看出 URL 传参的过程
  // 1  /： 可以传任何参数，可以指定多个
  // 2  /:direction  只能传给定的参数
  return (
    <Router>
      <div>
        <NavMenu />
        <hr />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about/:aboutId" component={About}></Route>
        <Route exact path="/info/:direction(asc|desc|abc)" component={Info}></Route>
        <Route exact path="/topics" component={Topics}></Route>
      </div>
    </Router>
  )
}


function NavMenu(props) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/info">Info</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  )
}


function Topics(props) {
  console.log("Topics: ", props);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/yin`}>01 Yin</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/peng`}>02 Peng</Link>
        </li>
      </ul>

      <Route path={`${props.match.path}/:topicId`} component={Topic} />

      <Route exact path={props.match.path} render={() => <h3>Please Select ...</h3>} />
    </div>
  )
}


function About(props) {
  console.log("About: ", props);
  return (
    <div>
      <h4>about: {props.match.params.aboutId}</h4>
    </div>
  )
}


function Info(props) {
  console.log("Info: ", props);
  return (
    <div>
      <h4>info: {props.match.params.direction}</h4>
    </div>
  )
}

const Home = () => <h2>Home</h2>
const Topic = () => <h2>Topic</h2>


export default App;