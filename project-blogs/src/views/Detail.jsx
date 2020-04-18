import React from 'react'
import '../style/detail.scss'
import {connect} from 'react-redux'
import * as TYPE from '../store/actionCreators.js'
import {Button, Modal, Form, FormGroup, FormControl, ControlLabel, Alert} from 'rsuite'
import moment from 'moment'


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
  // 组件加载完毕
  componentDidMount() {

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
  submit() {
    let {form} = this.state
    let index = (this.props.match.params.id) - 1
    // 调用store的方法
    this.props.onSubmit(index, form)
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
          <div className="title-box">
            <span onClick={() => this.goBack()}>返回</span>
            <h4 className="font-center">Detail</h4>
            <Button color="orange" onClick={() => this.updateClick()}>update</Button>
          </div>
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
              <Form formValue={form} layout="horizontal">
                <FormGroup>
                  <ControlLabel>Username</ControlLabel>
                  <FormControl name="username" onChange={(e) => this.handleChange(e, 'username')} />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Title</ControlLabel>
                  <FormControl name="title" onChange={(e) => this.handleChange(e, 'title')}/>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Content</ControlLabel>
                  <FormControl rows={8} name="content" componentClass="textarea" onChange={(e) => this.handleChange(e, 'content')} />
                </FormGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.setState({show: false})} appearance="default">
                Cancel
              </Button>
              <Button onClick={() => this.submit()} appearance="primary">
                Submit
              </Button>
            </Modal.Footer>
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