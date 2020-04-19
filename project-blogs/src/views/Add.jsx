import React from 'react'
import '../style/views/add.scss'
import {connect} from 'react-redux'
import * as TYPE from '../store/actionCreators.js'
import FormMenu from '../components/FormMenu.jsx'
import {Alert, Icon} from 'rsuite'


class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="add" className="container">
        <div className="title-box">
          <h4 className="font-center">Add</h4>
          <span onClick={() => this.goBack()}><Icon icon='angle-left' style={{paddingRight: '5px'}}></Icon>返回</span>
        </div>
        {/* 父组件和子组件通信 */}
        <FormMenu showBtn='true'
                  firstBtnText='Reset'
                  firstBtnMethod='onReset'
                  onForm={(val) => this.onSubmit(val)}></FormMenu>
      </div>
    )
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-17 18:16:36
   * @information: 返回
   */
  goBack() {
    this.props.history.go(-1)
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-17 17:39:57
   * @information: 提交
   */
  onSubmit(val) {
    // 调用store的方法 保存至 store 中
    this.props.onSubmit(val)
    Alert.success('添加成功')
  }
}


// 映射：将 store 里面的内容映射到 props 中

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {

    /**
     * @author: 殷鹏飞
     * @Date: 2020-04-18 14:36:45
     * @information: 往 store 中添加数据
     */
    onSubmit(val) {
      let action = TYPE.addItem(val)
      dispatch(action)
    },




  }
}







export default connect(mapStateToProps, mapDispatchToProps)(Add)