/**
 * 如何在调整浏览器大小时重新渲染视图?
 * 
 * 你可以在 componentDidMount() 中监听 resize 事件，然后更新尺寸（width 和 height）;
 *  你应该在 componentWillUnmount() 方法中移除监听。
 * 
 * 1、JavaScript 方法：
 *    window.innerWidth 和 window.innerHeight 包含滚动条的尺寸
 * 
 * 2、JQuery 方法：
 *    $(window).width() 和 $(window).height() 不包含滚动条的尺寸
 */


import React from 'react'


export default class Test2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
    this._updateDimensions = this._updateDimensions.bind(this)
  }

  componentWillMount() {
    console.log("componentWillMount 触发了");
    this._updateDimensions()
  }

  componentDidMount() {
    console.log("componentDidMount 触发了");
    window.addEventListener('resize', this._updateDimensions)
  }

  componentWillUnmount() {
    console.log("componentWillUnmount 触发了");
    window.removeEventListener('resize', this._updateDimensions)
  }

  _updateDimensions() {
    console.log(document.body.clientWidth);
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }


  render() {
    return (
      <div>
        {this.state.width} × {this.state.height}
      </div>
    )
  }
}

// 知识扩展：

// Javascript、Jquery获取浏览器和屏幕各种高度宽度

// Javascript:

// alert(document.body.clientWidth);        //网页可见区域宽(body)

// alert(document.body.clientHeight);       //网页可见区域高(body)

// alert(document.body.offsetWidth);       //网页可见区域宽(body)，包括border、margin等

// alert(document.body.offsetHeight);      //网页可见区域宽(body)，包括border、margin等

// alert(document.body.scrollWidth);        //网页正文全文宽，包括有滚动条时的未见区域

// alert(document.body.scrollHeight);       //网页正文全文高，包括有滚动条时的未见区域

// alert(document.body.scrollTop);           //网页被卷去的Top(滚动条)

// alert(document.body.scrollLeft);           //网页被卷去的Left(滚动条)

// alert(window.screenTop);                     //浏览器距离Top

// alert(window.screenLeft);                     //浏览器距离Left

// alert(window.screen.height);                //屏幕分辨率的高

// alert(window.screen.width);                 //屏幕分辨率的宽

// alert(window.screen.availHeight);          //屏幕可用工作区的高

// alert(window.screen.availWidth);           //屏幕可用工作区的宽

// Jquery:

// alert($(window).height());                           //浏览器当前窗口可视区域高度

// alert($(document).height());                        //浏览器当前窗口文档的高度

// alert($(document.body).height());                //浏览器当前窗口文档body的高度

// alert($(document.body).outerHeight(true));  //浏览器当前窗口文档body的总高度 包括border padding margin

// alert($(window).width());                            //浏览器当前窗口可视区域宽度

// alert($(document).width());                        //浏览器当前窗口文档对象宽度

// alert($(document.body).width());                //浏览器当前窗口文档body的宽度

// alert($(document.body).outerWidth(true));  //浏览器当前窗口文档body的总宽度 包括border padding margin

