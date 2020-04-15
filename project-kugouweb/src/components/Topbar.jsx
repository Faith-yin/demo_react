/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/components/topbar.scss'
import {  Button, Input, InputGroup, Icon } from 'rsuite';


export default class Topbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '', //搜索值
    }
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-14 16:30:41
   * @information: 输入框值变化时
   */
  handleChange(e) {
    this.setState({
      searchValue: e
    })
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-14 17:12:42
   * @information: 搜索
   */
  handleSearch() {
    console.log(this.state.searchValue);
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-14 17:01:55
   * @information: 登录
   */
  handleLogin() {
    console.log('登录o');
  }
  render() {
    let {searchValue} = this.state
    return (
      <div id="topbar-container">
        {/* logo图片 */}
        <a href="">
          <img src="https://staticssl.kugou.com/public/root/images/logo.png" alt="logo"/>
        </a>
        {/* 搜索框 */}
        <InputGroup inside style={{width: 300}} className="search-box">
          <Input placeholder="周杰伦 夜曲" value={searchValue} onChange={(e) => this.handleChange(e)} />
          <InputGroup.Button>
            <Icon icon="search" onClick={() => this.handleSearch()} />
          </InputGroup.Button>
        </InputGroup>
        {/* 右侧按钮 */}
        <div className="a_lnk-box">
          <div className="a_link-item"><a>客服中心</a></div>
          <div className="a_link-item"><a>招贤纳士</a></div>
          <div className="a_link-item"><a>会员中心</a></div>
        </div>
        <Button appearance="primary" className="login-btn" size="sm" onClick={() => this.handleLogin()}>登录</Button>
      </div>
    )
  }
}