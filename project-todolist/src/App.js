import React from 'react';
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }
  _addItem = (e) => {
    // var value = document.getElementById('input').value;
    e.preventDefault();

    var itemArray = this.state.items;
    itemArray.push({
      text: this._inputElement.value,
      key: Date.now() // 相当于 new Date().getTime()，但是运行效率更高
    });
    this.setState({
      items: itemArray
    });
    // console.log("items: ",this.state.items);
    this._inputElement.value = "";
    this._inputElement.focus();
  }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this._addItem}>
          <input type="text" id="input" ref={(a) => this._inputElement = a} />
          <button type="submit" className="btn">添加</button>
        </form>
        <ToDoItems entries={this.state.items} />
      </div>
    )
  }
}


class ToDoItems extends React.Component {
  render() {
    var todoEntries = this.props.entries;
    function _createTasks(item) {
      return (
        <li key={item.key}>{item.text}</li>
      )
    };
    var todoItems = todoEntries.map(_createTasks);
    return (
      <ol className="container">{todoItems}</ol>
    )
  }
}






export default App;
