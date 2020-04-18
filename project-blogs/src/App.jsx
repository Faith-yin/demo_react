/*
 * @author: 殷鹏飞
 * @Date: 2020-04-16 11:42:54
 * @information: 
 */
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'rsuite/dist/styles/rsuite-default.css';
import routerConfig from './router/router.js'



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      // 注册路由配置
      // Switch：若路由配置信息由 <Switch> 标签包裹，则其中的 <Route> 在路径相同的情况下，只匹配第一个，避免重复匹配，保证路由路径的唯一性
      <Router>
        <Switch>
          {routerConfig.map((el,index) => 
            <Route key={index} exact={el.exact} path={el.path} component={el.component} />
            )}
        </Switch>
      </Router>
    )
  }
}

