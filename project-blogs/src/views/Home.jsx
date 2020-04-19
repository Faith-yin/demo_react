import React from 'react'
import '../style/views/home.scss'
import {Button} from 'rsuite'
import {connect} from 'react-redux'
import * as TYPE from '../store/actionCreators.js'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let {list} = this.props
    return (
      <div id="home" className="container">
        <div className="title-box">
          <h4>Home</h4>
          <Button color="orange" onClick={() => this.addBlog()}>add</Button>
        </div>
        <div className="list">
          { list.length > 0 
            ? list.map((el,index) => (
              <div className="item-box" key={index}>
                <div onClick={() => this.itemClick({index,el})}>{index+1} -- {el.title}</div>
                <Button size="xs" onClick={() => this.deleteClick(index)}>delete</Button>
              </div>
            )) 
            : <div className="no-data-box">暂无数据，点击右上角【add】以添加数据</div>
          }
        </div>
      </div>
    )
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-17 14:58:28
   * @information: 添加
   */  
  addBlog() {
    this.props.history.push('/add')
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-17 14:58:38
   * @information: item点击
   */
  itemClick({index, el}) {
    // 路由传参
    this.props.history.push({pathname: `/detail/${index+1}`, params: el})
  }
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-18 15:46:43
   * @information: 删除
   */
  deleteClick(val) {
    this.props.deleteClick(val)
  }
}



// 映射：将 store 里面的内容映射到 props 中

// mapStateToProps
const mapStateToProps = (state) => ({
  list: state.list
})

const mapDispatchToProps = (dispatch) => ({
  /**
   * @author: 殷鹏飞
   * @Date: 2020-04-18 16:01:32
   * @information: 删除
   */
  deleteClick(val) {
    let action = TYPE.deleteItem(val)
    dispatch(action)
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)