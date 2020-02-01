/**
 * 使用 <pre> 标签，以保留 JSON.stringify() 的格式
 * 
 * JSON.stringify() 方法是将 json 数据转换成字符串
 * 
 * JSON.parse() 方法是将 json 字符串换成 json 对象
 */

import React from 'react'

var str = {
  "name": "John",
  "age": 20
}


// React.version 可查看当前运行的 React 版本
const REACT_VERSION = React.version


export default class Test3 extends React.Component {
  render() {
    return (
      <div>
        <pre>
          {JSON.stringify(str, null, 2)}
        </pre>

        <p>React version: {REACT_VERSION}</p>
      </div>
    )
  }
}


