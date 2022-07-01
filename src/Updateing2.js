import React, { Component } from 'react'

export default class Updateing2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            hobi : "readingBook"
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({hobi : "computer"})
        }, 2000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = "Güncellemeden öceki hobi " + prevState.hobi
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "Güncellemeden Sonraki hobi " + this.state.hobi
    }
  render() {
    return (
      <div>
      <h1>Hobi : {this.state.hobi}</h1>
      <div id='div1'></div>
      <div id='div2'></div>
      </div>
    )
  }
}
