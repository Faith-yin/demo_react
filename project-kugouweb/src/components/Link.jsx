/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/components/link.scss'
import { Icon } from 'rsuite';


export default class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      linkList: ['爱美网', '汽车论坛', 'IT之家','iPhone游戏','旅游攻略','华为商城','365音乐网','软件下载','漫漫看漫画','手机游戏',
      '5sing原创音乐','腾讯音乐人','豌豆荚','5sing众筹',], //链接列表
    }
  }
  render() {
    let {linkList} = this.state
    return (
      <div id="link">
        <div className="title-box">
          <div className="main-title"><span>友情</span>链接</div>
          <div className="more">更多</div>
        </div>
        <div className="link-list">
          {linkList.map((el,index) => (
            <div className="link-item" key={index}>
              {el}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

