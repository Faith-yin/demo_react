/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from 'react';
import '../style/components/footer.scss'


export default class NewSong extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textList: ['关于酷狗','监督举报','广告服务','投诉指引','隐私政策','儿童隐私政策','用户服务协议','酷狗音乐人','酷狗直通车',
      '招聘信息','客服中心','用户体验提升计划'], //文字列表
    }
  }
  render() {
    let {textList} = this.state
    return (
      <div id="footer">
        {/* 上面 */}
        <div className="container">
          <div className="box">
            <div className="first-cell">
              {textList.map((el,index) => (
                <Fragment key={index}>
                  <div className="text-item">{el}</div>
                  <div style={{display: index==11 ? 'none' : 'block'}} className="line">|</div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        {/* 下面 */}
        <div className="bottom-container">
          <div className="bottom-box">
            <div>我们致力于推动网络正版音乐发展，相关版权合作请联系copyrights@kugou.com</div>
            <div>信息网络传播视听节目许可证 1910564 增值电信业务经营许可证粤B2-20060339    </div>
            <div>广播电视节目制作经营许可证（粤）字第01270号    营业性演出许可证穗天演440106026</div>
            <div>穗公网监备案证第44010650010167    互联网药品信息服务资格证编号（粤）-非经营性-2012-0018</div>
            <div>不良信息举报邮箱：jubao_music@kugou.net    客服邮箱：kefu@kugou.net</div>
            <div>Copyright  ©  2004-2020 KuGou-Inc.All Rights Reserved</div>
          </div>
        </div>
      </div>
    )
  }
}
