/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/components/navbar.scss'
import { Carousel } from 'rsuite';


export default class Navigationbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openMark: false, //下拉菜单开关标志
    }
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-14 18:56:06
   * @information: 悬浮
   */
  handleMouseOver() {
    if(this.state.openMark) return;
    this.setState({
      openMark: true
    })
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-14 19:06:44
   * @information: 悬浮离开
   */
  handleMouseLeave() {
    if(!this.state.openMark) return;
    this.setState({
      openMark: false
    })
  }
  render() {
    let {openMark} = this.state
    return (
      <div id="navbar">
        {/* 导航栏 */}
        <div className="nav-container">
          <div className="nav-wrapper">
            <div className="home-nav">
              <div className="active-nav">首页</div>
              <div>榜单</div>
              <div>下载客户端</div>
              <div onMouseOver={() => this.handleMouseOver()}
                  onMouseLeave={() => this.handleMouseLeave()}>更多</div>
            </div>
            <div className="second-menu" 
                style={{display: openMark?'block':'none'}}
                onMouseOver={() => this.handleMouseOver()}
                onMouseLeave={() => this.handleMouseLeave()}>
              <div>电台</div>
              <div>MV</div>
              <div>歌单</div>
              <div>歌手</div>
            </div>
            <div className="sub-nav">
              <div>音乐直播</div>
              <div>酷狗LIVE</div>
              <div>音乐人</div>
              <div>主播电视</div>
              <div>商城</div>
              <div>供应商入驻</div>
            </div>
          </div>
        </div>
        {/* 轮播 */}
        <Carousel autoplay className="custom-slider">
          <img src="https://imgessl.kugou.com/commendpic/20200406/20200406233800728240.jpg"/>
          <img src="https://imgessl.kugou.com/commendpic/20200407/20200407114156116096.jpg"/>
          <img src="https://imgessl.kugou.com/commendpic/20200407/20200407114244160948.jpg"/>
          <img src="https://imgessl.kugou.com/commendpic/20200414/20200414110520172002.jpg"/>
          <img src="https://imgessl.kugou.com/commendpic/20200414/20200414001659156482.jpg"/>
          <img src="https://imgessl.kugou.com/commendpic/20200412/20200412234821612325.jpg"/>
          <img src="https://imgessl.kugou.com/commendpic/20200414/20200414001805339592.jpg"/>
        </Carousel>
        {/* 下载容器 */}
        <div className="download-blur">
          <div className="download-item">下载PC版</div>
          <span className="line"></span>
          <div className="download-item">下载iPhone版</div>
          <span className="line"></span>
          <div className="download-item">下载Android版</div>
        </div>
      </div>
    )
  }
}