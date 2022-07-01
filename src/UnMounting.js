import React, { Component } from 'react'
import User from './User'

export default class UnMounting extends Component {

    constructor(props){
        super(props)
        this.state = {
            toggle : true
        }
    }
  render() {
    return (
      <div>
      {
       this.state.toggle?
       <User/>: null
      }
        <button onClick={() => {this.setState({toggle: !this.state.toggle})}}>Delete User</button>
      </div>
    )
  }
}
