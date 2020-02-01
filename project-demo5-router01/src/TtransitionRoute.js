/**
 * React Router 路由切换动画过渡
 */

import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './CSS/TransitionRoute.css'


class TransitionRoute extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavMenu />

          <Route 
            render={
              ({location})=>(
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fade" timeout={500} >
                    <Switch location={location}>
                      <Route path="/red" component={Red} />
                      <Route path="/green" component={Green} />
                      <Route path="/pink" component={Pink} />
                      <Route path="/orange" component={Orange} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )
            }
          />

        </React.Fragment>
      </Router>
    )
  }
}


function NavMenu() {
  return (
    <ul className="menu">
      <li><Link to="/red">Red</Link></li>
      <li><Link to="/green">Green</Link></li>
      <li><Link to="/pink">Pink</Link></li>
      <li><Link to="/orange">Orange</Link></li>
    </ul>
  )
}

const Red = () => <div className="page pageRed">red...</div>
const Green = () => <div className="page pageGreen">green...</div>
const Pink = () => <div className="page pagePink">pink...</div>
const Orange = () => <div className="page pageOrange">orange...</div>




export default TransitionRoute;