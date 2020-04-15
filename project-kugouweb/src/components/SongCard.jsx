/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/components/song_card.scss'
import { Icon } from 'rsuite';


export default class SongCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="song-card">
        {/* 精选歌单 */}
        <div className="select-song-container">
          <div className="title-box">
            <div className="main-title"><span>精选</span>歌单</div>
            <div className="more">更多</div>
          </div>
          <div className="image-list">
            <div className="left-item">
              <div className="hot-number">13.2万</div>
              <img src="https://imgessl.kugou.com/custom/480/20191122/20191122114806709342.jpg"/>
              <div className="desc">
                <div className="desc-title">【华语】趁还来得及，我要抱紧你</div>
                <div className="desc-singer">顾怀安</div>
              </div>
            </div>
            <div className="right-list">
              <div className="right-item">
                <div className="hot-number">13.2万</div>
                <img src="https://imgessl.kugou.com/soft/collection/150/20200325/20200325102750855376.jpg"/>
                <div className="desc">
                  <div className="desc-title">每周推荐歌曲</div>
                  <div className="desc-singer">酷狗号歌单君</div>
                </div>
              </div>
              <div className="right-item" style={{marginLeft: '5px'}}>
                <div className="hot-number">13.2万</div>
                <img src="https://imgessl.kugou.com/soft/collection/150/20200411/20200411122925254133.jpg"/>
                <div className="desc">
                  <div className="desc-title">每周推荐歌曲</div>
                  <div className="desc-singer">酷狗号歌单君</div>
                </div>
              </div>
              <div className="right-item">
                <div className="hot-number">13.2万</div>
                <img src="https://imgessl.kugou.com/custom/150/20200410/20200410011445497843.jpg"/>
                <div className="desc">
                  <div className="desc-title">每周推荐歌曲</div>
                  <div className="desc-singer">酷狗号歌单君</div>
                </div>
              </div>
              <div className="right-item" style={{marginLeft: '5px'}}>
                <div className="hot-number">13.2万</div>
                <img src="https://imgessl.kugou.com/soft/collection/150/20200330/20200330170945717322.jpg"/>
                <div className="desc">
                  <div className="desc-title">每周推荐歌曲</div>
                  <div className="desc-singer">酷狗号歌单君</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 热门歌单 */}
        <div className="hot-song-container">
          <div className="title-box">
              <div className="main-title"><span>热门</span>歌单</div>
              <div className="more">更多</div>
          </div>
          <div className="right-list">
            <div className="right-item">
              <img src="https://imgessl.kugou.com/v2/rank_cover/04b10ec0bb3d8dfdc2b6cf0d30e0ebd3.jpg_240x240.jpg"/>
              <div className="text">
                <div className="title">酷狗飙升榜</div>
                <div>1. 周杰伦 - 夜曲</div>
                <div>2. 萨顶顶 - 左手指月</div>
              </div>
              <Icon icon='angle-right'/>
            </div>
            <div className="right-item">
              <img src="https://imgessl.kugou.com/v2/rank_cover/bc23a80bf7a2e9179460ed2b6e384849.jpg_240x240.jpg"/>
              <div className="text">
                <div className="title">酷狗TOP500</div>
                <div>1. 胡66 - 后来遇见他</div>
                <div>2. 皮卡丘多多 - 惊雷</div>
              </div>
              <Icon icon='angle-right'/>
            </div>
            <div className="right-item">
              <img src="https://imgessl.kugou.com/v2/rank_cover/47e76f9757c6bbb670630b4671961759.jpg_240x240.jpg"/>
              <div className="text">
                <div className="title">网络红歌榜</div>
                <div>1. 崔伟立 - 酒醉的蝴蝶</div>
                <div>2. 大欢 - 多年以后</div>
              </div>
              <Icon icon='angle-right'/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}