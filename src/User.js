import React, { Component } from 'react'

export default class User extends Component {
    componentWillUnmount(){
         alert ("user has been daleted")
        console.log("UnMounting")
    }
  render() {
    return (
      <div>
        <ul>
            <li>Name : Sümeyye</li>
            <li>Surname : Demir</li>
            <li>Age : 21</li>
        </ul>
      </div>
    )
  }
}
