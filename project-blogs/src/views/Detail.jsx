import React from 'react'
import '../style/views/detail.scss'
import {connect} from 'react-redux'
import * as TYPE from '../store/actionCreators.js'
import {Button, Modal, Alert} from 'rsuite'
import moment from 'moment'
import FormMenu from '../components/FormMenu.jsx'


class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: '',
        title: '',
        content: '',
      },
      show: false
    }
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
   * @Date: 2020-04-18 15:09:08
   * @information: 修改
   */
  updateClick() {
    let {list} = this.props
    let {id} = this.props.match.params
    this.setState({
      form: list[id-1],
      show: true
    })
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-18 16:58:36
   * @information: input 值改变时
   */
  handleChange(e, type) {
    let {form} = this.state
    this.setState({
      form: {
        ...form,
        [type]: e
      }
    })
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-18 17:00:17
   * @information: 提交
   */
  onSubmit(val) {
    let index = (this.props.match.params.id) - 1
    // 调用store的方法
    this.props.onSubmit(index, val)
    Alert.success('更新成功')
    this.setState({show: false})
  }
  render() {
    let {form} = this.state
    let {list} = this.props
    let {id} = this.props.match.params
    let detailInfo = list[id-1]
    return (
      <div id="detail" className="container">
        {/* 详情部分 */}
        <div className="detail-box">
          {/* 标题部分 */}
          <div className="title-box">
            <span onClick={() => this.goBack()}>返回</span>
            <h4 className="font-center">Detail</h4>
            <Button color="orange" onClick={() => this.updateClick()}>update</Button>
          </div>
          {/* 内容部分 */}
          <div className="content-box">
            <h5>{detailInfo.title}</h5>
            <div className="display--flex">
              <div className="author">author：{detailInfo.username}</div> | 
              <div className="createTime">createTime：{detailInfo.createTime ? moment(detailInfo.createTime).format('YYYY/MM/DD HH:mm:ss') : '--'}</div>
            </div>
            <div className="content">{detailInfo.content}</div>
          </div>
        </div>
        {/* 弹窗部分 */}
        <div className="update-box">
          <Modal show={this.state.show} 
                onHide={() => this.setState({show: false})} 
                backdrop='static'>
            <Modal.Header>
              <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* 父组件和子组件通信 */}
              <FormMenu showBtn='true'
                        formVal={form}
                        firstBtnText='Cancel'
                        firstBtnMethod='onCancel'
                        sendOnCancel={() => this.setState({show: false})}
                        onForm={(val) => this.onSubmit(val)}></FormMenu>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    /**
     * @author: 殷鹏飞
     * @Date: 2020-04-18 14:49:30
     * @information: 修改
     */
    updateClick(val) {
      let action = TYPE.updateItem(val)
      dispatch(action)
    },
    /**
     * @author: 殷鹏飞
     * @Date: 2020-04-18 17:07:28
     * @information: 提交
     */  
    onSubmit(index, form) {
      let action = TYPE.updateItem({index, form})
      dispatch(action)
    }
  }
}






export default connect(mapStateToProps, mapDispatchToProps)(Detail)