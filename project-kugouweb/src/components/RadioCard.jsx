/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/components/radio_card.scss'
import { Icon } from 'rsuite';


export default class RadioCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioList: [1,2,3,4,5,6,7,8,9,10], //电台列表
    }
  }
  render() {
    let {radioList} = this.state
    return (
      <div id="radio-card">
        {/* 左侧 */}
        <div className="left-container">
          <div className="title-box">
            <div className="main-title"><span>推荐</span>MV</div>
            <div className="more">更多</div>
          </div>
          <div className="radio-list">
            {radioList.map((el,index) => (
              <div className="left-item" key={index}>
                <img src="https://staticssl.kugou.com/public/root/images/radio_1.jpg" width='100px' height='100px' />
                <div className="desc">KTV必点曲</div>
              </div>
            ))}
          </div>
        </div>
        {/* 右侧 */}
        <div className="right-container">
          <div className="title-box">
            <div className="main-title"><span>推荐</span>MV</div>
            <div className="itemname" style={{color: '#009af3'}}>华语</div>
            <div className="itemname">欧美</div>
            <div className="itemname">日韩</div>
            <div className="itemname more">更多</div>
          </div>
          <div className="right-bottom">
            <div className="top">
              <div className="top-item">
                <img src="https://imgessl.kugou.com/uploadpic/softhead/240/20190806/20190806163442954.jpg" width='140px' height='140px'/>
                <div className="desc">Alan Walker</div>
              </div>
              <div className="top-item">
                <img src="https://imgessl.kugou.com/uploadpic/softhead/240/20190809/20190809151311243.jpg" width='140px' height='140px'/>
                <div className="desc">Taylor Swiftr</div>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-item">
                <img src="https://imgessl.kugou.com/uploadpic/softhead/240/20181102/20181102182312198.jpg" width='90px' height='90px'/>
                <div className="desc">Taylor Swiftr</div>
              </div>
              <div className="bottom-item">
                <img src="https://imgessl.kugou.com/uploadpic/softhead/240/20181102/20181102182312198.jpg" width='90px' height='90px'/>
                <div className="desc">Taylor Swiftr</div>
              </div>
              <div className="bottom-item">
                <img src="https://imgessl.kugou.com/uploadpic/softhead/240/20181102/20181102182312198.jpg" width='90px' height='90px'/>
                <div className="desc">Taylor Swiftr</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }

}