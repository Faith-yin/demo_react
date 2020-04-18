/*
 * @author: 殷鹏飞
 * @Date: 2020-04-17 19:17:41
 * @information: 创建的reducer
 */
import {ADD, GET, DELETE, UPDATE} from './actionTypes.js'

const defaultState = {
  list: [
    {
      username: '小明',
      title: '这是第一个标题',
      content: '这是第一个内容...',
    },
    {
      username: '小红',
      title: '这是第二个标题',
      content: '这是第二个内容...',
    },
    {
      username: '小刚',
      title: '这是第三个标题',
      content: '这是第三个内容...',
    },
  ]
}


export default (state = defaultState, action) => {
  // Reducer 里只能接受 state，不能改变 state, 在此采用深拷贝更新再赋值..

  if(action.type === ADD) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.val)
    return newState
  }


  if(action.type === GET) {}


  if(action.type === DELETE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.val,1)
    return newState
  }


  if(action.type === UPDATE) {
    let newState = JSON.parse(JSON.stringify(state))
    let {index, form} = action.val
    // 更新某一项信息
    newState.list[index] = form
    return newState
  }




  return state;
}

