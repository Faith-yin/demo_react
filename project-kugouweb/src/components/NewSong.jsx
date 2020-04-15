/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/components/new_song.scss'
import { Icon } from 'rsuite';


export default class NewSong extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songList: [1,2,3,4,5,6,7], //新歌列表
    }
  }
  render() {
    let {songList} = this.state
    return (
      <div id="new-song">
        {/* 左侧栏 */}
        <div className="left-container">
          <div className="title-box">
            <div className="left-title">
              <div className="main-title"><span>新歌</span>首发</div>
              <div className="type-name">
                <div>华语</div>
                <div>欧美</div>
                <div>韩国</div>
                <div>日本</div>
              </div>
            </div>
            <div className="play"><Icon icon='play2'/>全部播放</div>
          </div>
          <div className="song-list">
            {songList.map((el, index) => (
              <div className="song-item" key={index}>
                <div className="item-title">
                  <div>小阿枫 - 口是心非</div>
                  <div className="tag-special">独家</div>
                </div>
                <div>03:30</div>
              </div>
            ))}
            <div className="page-box">1/3</div>
          </div>
        </div>
        {/* 右侧栏 */}
        <div className="right-container">
          <div className="title-box">
            <div className="main-title"><span>推荐</span>MV</div>
            <div className="more">更多</div>
          </div>
          <div className="top">
            <img src="https://imgessl.kugou.com/mvhdpic/400/20200406/20200406153001737109.jpg" width="300px" height="175px" />
            <div className="desc">
              <div className="title">Fight as ONE</div>
              <div className="singer">陈奕迅、蔡依林</div>
            </div>
          </div>
          <div className="bottom">
            <div>
              <img src="https://imgessl.kugou.com/commendpic/20200403/20200403230022154853.jpg" width="145px" height="84px"/>
              <div className="desc">
                <div className="title">爱有力量</div>
                <div className="singer font-hidden">白百何、郑楚馨、邱梓淇、刘雨童、李诺麒、李澳利、李帝利</div>
              </div>
            </div>
            <div>
              <img src="https://imgessl.kugou.com/commendpic/20200403/20200403230022154853.jpg" width="145px" height="84px"/>
              <div className="desc">
                <div className="title">难说再见</div>
                <div className="singer font-hidden">刘德华、刘欢、周华健、成龙</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}