/**
 * React Router 单页应用 App 开发
 */

import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>Single Application Page</h1>
        <ul className="header">
          <li><NavLink exact to="/" activeClassName="active">李白</NavLink></li>
          <li><NavLink to="/df" activeClassName="active">杜甫</NavLink></li>
          <li><NavLink to="/lsy" activeClassName="active">李商隐</NavLink></li>
          <li><NavLink to="/lqz" activeClassName="active">李清照</NavLink></li>
          <li><NavLink to="/list" activeClassName="active">更多文人</NavLink></li>
        </ul>

        <div className="container">
          <Switch>
            <Route exact path="/" component={LB} />
            <Route exact path="/df" component={DF} />
            <Route exact path="/lsy" component={LSY} />
            <Route exact path="/lqz" component={LQZ} />>
            <Route exact path="/list" component={List} />
            <Route exact path="/list/:id" component={ListItem} />
            <Route component={NotFind} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// 组件的定义
function LB() {
  return (
    <div>
      <h2>望天门山</h2>
      <ul>
        <li>天门中断楚江开，碧水东流至此回。</li>
        <li>两岸青山相对出，孤帆一片日边来。</li>
      </ul>
    </div>
  )
}

function DF() {
  return (
    <div>
      <h2>登高</h2>
      <ul>
        <li>风急天高猿啸哀，渚清沙白鸟飞回。</li>
        <li>无边落木萧萧下，不尽长江滚滚来。</li>
        <li>万里悲秋常作客，百年多病独登台</li>
        <li>艰难苦恨繁霜鬓，潦倒新停浊酒杯。</li>
      </ul>
    </div>
  )
}

function LSY() {
  return (
    <div>
      <h2>锦瑟</h2>
      <ul>
        <li>锦瑟无端五十弦，一弦一柱思华年。</li>
        <li>庄生晓梦迷蝴蝶，望帝春心托杜鹃。</li>
        <li>沧海月明珠有泪，蓝田日暖玉生烟。</li>
        <li>此情可待成追忆？只是当时已惘然。</li>
      </ul>
    </div>
  )
}

function LQZ() {
  return (
    <div>
      <h2>声声慢 · 寻寻觅觅</h2>
      <ul>
        <li>寻寻觅觅，冷冷清清，凄凄惨惨戚戚。</li>
        <li>乍暖还寒时候，最难将息。</li>
        <li>三杯两盏淡酒，怎敌他、晚来风急？</li>
        <li>雁过也，正伤心，却是旧时相识。</li><br />
        <li>满地黄花堆积。憔悴损，如今有谁堪摘？</li>
        <li>守着窗儿，独自怎生得黑？</li>
        <li>梧桐更兼细雨，到黄昏、点点滴滴。</li>
        <li>这次第，怎一个愁字了得！</li>
      </ul>
    </div>
  )
}

function List({match}) {
  console.log("List: ",match);
  return (
    <div>
      <ul className="list">
        <li><Link to={`${match.url}/1`}>陆游</Link></li>
        <li><Link to={`${match.url}/2`}>白居易</Link></li>
        <li><Link to={`${match.url}/3`}>苏轼</Link></li>
        <li><Link to={`${match.url}/4`}>王安石</Link></li>
      </ul>
    </div>
  )
}

function ListItem({match}) {
  console.log("ListItem: ",match);
  var id = match.params.id;
  if (id == 1) {
    return (
      <h2>list-item: {match.params.id} -- 陆游</h2>
    )
  } else if (id == 2) {
    return (
      <h2>list-item: {match.params.id} -- 白居易</h2>
    )
  } else if (id == 3) {
    return (
      <h2>list-item: {match.params.id} -- 苏轼</h2>
    )
  } else {
    return (
      <h2>list-item: {match.params.id} -- 王安石</h2>
    )
  }
}

const NotFind = () => <h2>4 0 4</h2>




export default App;
