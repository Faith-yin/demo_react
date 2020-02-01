/**
 * React Router SideBar 的书写
 *              遍历 Routes 路由数组 的过程
 */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './CSS/SideBar.css';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>There is home!</div>,
    main: () => <h2>home...</h2>
  },
  {
    path: "/info",
    sidebar: () => <div>There is info!</div>,
    main: () => <h2>info...</h2>
  },
  {
    path: "/about",
    sidebar: () => <div>There is about!</div>,
    main: () => <h2>about...</h2>
  }
]

class SideBar extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="container">
            <div className="menuContainer">
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/info">Info</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>

              {routes.map((route, index) => <Route
                key={`side-bar-${index}`}
                path={route.path}
                exact={route.exact}
                render={route.sidebar}
              />)}
            </div>

            <div className="main">
              {routes.map((route, index) => <Route
                key={`side-bar-${index}`}
                path={route.path}
                exact={route.exact}
                render={route.main}
              />)}
            </div>
          </div>

        </React.Fragment>
      </Router>
    )
  }
}






export default SideBar;