import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store/index'


// 传递参数：子组件（例如：TodoList）就可接收参数来使用 store 中的内容
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)


ReactDOM.render(
  App,
  document.getElementById('root')
);

