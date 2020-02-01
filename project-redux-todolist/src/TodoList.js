import React from 'react'
import store from './store/index'
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'


class TodoList extends React.Component {
  constructor(props) {
    super(props)
    // console.log(store.getState());
    this.state = store.getState()
    // 绑定 this，改变其指向
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    // store 订阅应用 state 的变化，state变化就会触发 storeChange 方法
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    )
  }


  componentDidMount() {
    axios.get('http://localhost:3000/reduxTestData')
      .then((response) => {
        // console.log(response);
        const data = response.data
        const action = getListAction(data)
        store.dispatch(action)
      })
      .catch((err) => {
        console.error("获取后台连接信息失败！错误信息：",err);
      })
  }


  storeChange() {
    this.setState(store.getState())
    // console.log("state：",this.state);
    // console.log("store：",store.getState());
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  clickBtn() {
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

}



export default TodoList;
