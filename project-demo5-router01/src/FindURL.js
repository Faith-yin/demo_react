/**
 * React Router 查询 URL 中的参数，并转字符串取出
 *   例如：地址栏参数为：localhost：3000/?name=丛
 */

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Home (props) {
  console.log(props);
  // decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
  // encodeURIComponent() 函数可对 字符串进行编码
  const queryString = decodeURIComponent(props.location.search);
  const arr = queryString.split("?")[1].split("=");
  const name = arr[0];
  const value = arr[1];

  return (
    <div>
      <h2>取出的参数如下：</h2>
      <div>{name}：{value}</div>
    </div>
  )
}


class FindURL extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}




export default FindURL;