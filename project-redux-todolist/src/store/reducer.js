import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'


const defaultState = {
  inputPlaceholder: 'Write Something',
  inputValue: '',
  list: [
    '8点起床洗漱，开始学习 React',
    '11点开始定外卖，然后继续学习',
    '晚上12点睡觉，不准失眠，精神好'
  ]
}


export default (state = defaultState, action) => {

  // Reducer 里只能接受 state，不能改变 state

  if(action.type === CHANGE_INPUT) {
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    // console.log("newState：",newState);
    return newState
  }

  if(action.type === ADD_ITEM) {
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    console.log(newState);
    newState.inputValue = ''
    return newState
  }

  if(action.type === DELETE_ITEM) {
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    // console.log(newState);
    return newState
  }

  if(action.type === GET_LIST) {
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.getlist
    return newState
  }


  return state
}