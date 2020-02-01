const defaultState = {
  inputPlaceholder: "Write Something",
  inputValue: "",
  list: [
    "这里是 react-redux 中的 data",
    "8点起床洗漱，开始学习 React",
    "11点开始定外卖，然后继续学习",
    "晚上12点睡觉，不准失眠，精神好"
  ]
}


export default (state = defaultState, action) => {

  // Reducer 里只能接受 state，不能改变 state

  if(action.type === 'change_input') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if(action.type === 'add_item') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }

  if(action.type === 'user_reset') {
    // let newState = JSON.parse(JSON.stringify(state))
    // console.log("newState: " ,newState);
    // return state
  }



  return state;
}

