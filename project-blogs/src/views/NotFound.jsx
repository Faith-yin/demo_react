import React from 'react'
import '../style/views/not_found.scss'


export default class NotFound extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="not-found" className="container">
        404
      </div>
    )
  }
}