import React, {Component} from 'react'
import PropTypes from 'prop-types'

// 类 的组件
class Button extends Component {
  constructor(props) {
    super(props)
  }

  // 未传入 name 的组件将使用此默认属性 
  static defaultProps = {
    name: "这是个默认 name "
  }

  // 利用第三方库（prop-types）进行的类型检查
  static propTypes = {
    name: PropTypes.string
  }

  render() {
    return (
      <button type="button">
        {this.props.name}
      </button>
    )
  }
}

// 函数 的组件
const Title = function(props) {
  return (
    <h4>
      这是一个来自 Button.js 中的 Title 组件
      {props.title}
      {props.children}
    </h4>
  )
}


export default Button;
export {Title};
