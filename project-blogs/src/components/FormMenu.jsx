import React from 'react'
import {Button, Alert, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar} from 'rsuite'



export default class FormMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: '',
        title: '',
        content: '',
      },
    }
  }
  render() {
    // showBtn 父组件传值，是否显示按钮组
    let {showBtn, firstBtnText, firstBtnMethod} = this.props
    let {form} = this.state
    return (
      <React.Fragment>
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
          {
            showBtn && (
              <FormGroup>
                <ButtonToolbar>
                  <Button appearance="default" onClick={() => this[firstBtnMethod]()}>{firstBtnText || 'Cancel'}</Button>
                  <Button appearance="primary" onClick={() => this.onSubmit()}>Submit</Button>
                </ButtonToolbar>
              </FormGroup> 
            )
          }
          
        </Form>
      </React.Fragment>
    )
  }
  componentDidMount() {
    let {formVal} = this.props
    // 如果父组件往这传formVal了，就赋给state中的form
    formVal && this.setState({form: formVal})
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-19 08:58:23
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
   * @Date: 2020-04-19 09:00:43
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
    // 给父组件通信：响应父组件方法
    this.props.onForm(newForm)
    // 清空表单
    this.onReset()
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-19 08:59:24
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
   * @Date: 2020-04-19 10:45:24
   * @information: 退出
   */
  onCancel() {
    this.props.sendOnCancel()
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-19 09:00:06
   * @information: 表单校验
   */
  formRequired() {
    let {form} = this.state
    let arr = ['username', 'title', 'content']
    let mark = arr.every(el => form[el])
    !mark && Alert.warning('请输入表单内容')
    return mark
  }
}


