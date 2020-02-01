import React from 'react';
import './App.css';

// 往项目中导入图片资源
import image_1 from './images/mi-1.jpg'
import image_2 from './images/mi-2.jpg'
import image_3 from './images/mi-3.jpg'
import image_4 from './images/mi-4.jpg'
import image_5 from './images/mi-5.jpg'

// 将所用到的图片放入一个数组中
var images = [image_1, image_2, image_3, image_4, image_5]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0  // active 类名
    }
  }

  // 自定义方法用 下划线_ 开头，与包自带方法区分
  _goNext() {
    var { index } = this.state;
    if (index === images.length - 1) {
      index = 0;
    } else {
      index++;
    }
    // console.log(index);
    this.setState({
      index: index
    })
  }

  _goPrev() {
    var { index } = this.state;
    if (index === 0) {
      index = images.length - 1;
    } else {
      index--;
    }
    // console.log(index);
    this.setState({
      index: index
    })
  }

  render() {
    var { index } = this.state;
    return (
      <div className='wrapper'>
        <ul className='list'>
          {
            // 1.map 遍历数组  key  diff  _id
            // 2.es6 括号的使用，模板字符串``的使用
            images.map((item, i) => {
              return (
                <li className={`item ${index === i ? 'active' : ''}`} key={i}>
                  <img src={item} alt="" />
                </li>
              )
            })
          }
        </ul>
        <button className='btn left' onClick={() => this._goPrev()}>&lt;</button>
        <button className='btn right' onClick={() => this._goNext()}>&gt;</button>
      </div>
    )
  }
}



export default App;
