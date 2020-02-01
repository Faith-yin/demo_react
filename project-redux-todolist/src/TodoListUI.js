import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'


class TodoListUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <div>
          <Input
            placeholder={this.props.inputPlaceholder}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.props.changeInputValue}
            value={this.props.inputValue}
          />
          <Button type="primary" onClick={this.props.clickBtn}>添加</Button>
          <div style={{ margin: '10px', width: '300px' }}>
            <List
              style={{ width: '500px' }}
              bordered
              dataSource={this.props.list}
              renderItem={(item, index) => (
                <List.Item style={{ width: '500px' }}>
                  {item}
                  <Button type="link" onClick={() => { this.props.deleteItem(index) }}>删除</Button>
                </List.Item>
              )}
            />

          </div>
        </div>
      </div>
    )
  }
}



export default TodoListUI

