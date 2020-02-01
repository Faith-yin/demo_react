/**
 * React Router 递归路径 Recursive Paths
 */

import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'

const PEEPS = [
  { id: 0, name: 'AAA', friends: [1, 2, 3] },
  { id: 1, name: 'BBB', friends: [0, 2] },
  { id: 2, name: 'CCC', friends: [1, 3] },
  { id: 3, name: 'DDD', friends: [0, 1, 2] }
]

function find(id) {
  return PEEPS.find(p => p.id == id);
}

function Person(props) {
  console.log(props);
  const id = props.match.params.id;
  const person = find(id);
  // 递归就是返回的时候再返回一个路由让你点。。。然后把自身传进去
  return (
    <div>
      <h2>{person.name}'s Friends</h2>
      <ul>
        {person.friends.map((fid, index) => {
          let friend = find(fid)
          return (
            <li key={index}>
              <Link to={`${props.match.url}/${fid}`}>{friend.name}</Link>
            </li>
          )
        })}
      </ul>
      <Route path={`${props.match.url}/:id`} component={Person} />
    </div>
  )
}


function RecursivePaths() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/0" />
        <Route path="/:id" component={Person} />
      </Switch>
    </Router>
  )
}




export default RecursivePaths;