import React from 'react'
import '../style/add.scss'
import { Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button, Alert } from 'rsuite';
import {connect} from 'react-redux'
import * as TYPE from '../store/actionCreators.js'


class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: { //表单
        username: '',
        title: '',
        content: '',
      }
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
   * @Date: 2020-04-17 16:57:04
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
   * @Date: 2020-04-17 17:39:50
   * @information: 重置
   */
  onReset() {
    let obj = {username: '', title: '', content: ''}
    this.setState({
      form: obj
    })
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-17 17:39:57
   * @information: 提交
   */
  onSubmit() {
    let mark = this.formRequired()
    if(!mark) return;
    // 加上创建时间字段 createTime
    let newForm = {
      ...this.state.form,
      createTime: new Date()
    }
    // 调用store的方法 保存至 store 中
    this.props.onSubmit(newForm)
    // 清空表单
    this.onReset()
    Alert.success('添加成功')
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-17 18:34:57
   * @information: 表单校验
   */
  formRequired() {
    let {form} = this.state
    let arr = ['username', 'title', 'content']
    let mark = arr.every(el => form[el])
    !mark && Alert.warning('请输入表单内容')
    return mark
  }
  render() {
    let {form} = this.state
    return (
      <div id="add" className="container">
        <div className="title-box">
          <h4 className="font-center">Add</h4>
          <span onClick={() => this.goBack()}>返回</span>
        </div>
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
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="default" onClick={() => this.onReset()}>重置</Button>
              <Button appearance="primary" onClick={() => this.onSubmit()}>提交</Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div>
    )
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