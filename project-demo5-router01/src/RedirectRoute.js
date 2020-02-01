/**
 * React Router 路由重定向 Redirect
 */

import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

class RedirectRoute extends React.Component {
  render() {
    return (
      // 1. 若路由配置信息由 <Switch> 标签包裹，则其中的 <Route> 在路径相同的情况下，
      //  只匹配第一个，避免重复匹配，保证路由路径的唯一性
      
      // 2. <Route/> 标签没有指明 path 路径的，表示所有的 Link 均可用，又因为 <Switch> 
      //  标签作用，所以找不见 path 路径的 Link 会匹配到 此 <Route/>，即所谓的 404，
      //  但是必须放到所有路由信息的最后，防止首先匹配至 404
      <Router>
        <React.Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/old-match">Old Match to be Redirect</Link>
            </li>
            <li>
              <Link to="/will-match">Will Match</Link>
            </li>
            <li>
              <Link to="/will-not-match">Will Not Match</Link>
            </li>
            <li>
              <Link to="/also-will-not-match">Also Will Not Match</Link>
            </li>
            <li>
              <Link to="/not">Not Found</Link>
            </li>
          </ul>

          <hr/>
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="/old-match" to="/will-match" />
            <Route path="/will-match" component={WillMatch} />
            <Route path="/will-not-match" component={WillNotMatch} />
            <Route path="/also-will-not-match" component={AlsoWillNotMatch} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

const Home = () => <h3>Home</h3>
const WillMatch = () => <h3>Will Match</h3>
const WillNotMatch = () => <h3>Will Not Match</h3>
const AlsoWillNotMatch = () => <h3>Also Will Not Match</h3>
const NotFound = () => <h3>404</h3>



export default RedirectRoute;