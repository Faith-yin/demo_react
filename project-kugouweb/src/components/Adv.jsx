/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../style/components/adv.scss'
import { Icon } from 'rsuite';


export default class Adv extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let {imgSource} = this.props
    return (
      <div id="adv">
        <img src={imgSource}/>
      </div>
    )
  }
}