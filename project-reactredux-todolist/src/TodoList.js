import React from 'react'
import { connect } from 'react-redux'


// UI 组件：用函数定义的 无状态组件，可提高性能
const TodoList = (props) => {
  // console.log("props: ",props);
  // js 结构赋值: 提高代码复用性
  let { inputPlaceholder, inputValue, _inputChange, _addItem, _reset, list } = props
  return (
    <div>
      <input type="text"
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={_inputChange}
      />
      <button onClick={_addItem}>添加</button>
      <button onClick={_reset}>重置</button>
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}


// 映射：将 store 里面的内容映射到 props 中
// mapStateToProps
const stateToProps = (state) => {
  return {
    inputPlaceholder: state.inputPlaceholder,
    inputValue: state.inputValue,
    list: state.list
  }
}


// mapDispatchToProps
const dispatchToProps = (dispatch) => {
  return {
    _inputChange(e) { // 检测输入框中值的变化
      let action = {
        type: 'change_input',
        value: e.target.value
      }
      dispatch(action)
    },
    _addItem() { // 往 store 中添加数据
      let action = {
        type: 'add_item'
      }
      dispatch(action)
    },
    _reset() { // 重置 store 中的数据
      let action = {
        type: 'user_reset'
      }
      dispatch(action)
    }
  }
}



export default connect(stateToProps, dispatchToProps)(TodoList);