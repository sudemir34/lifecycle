import React, { Component } from 'react'

export default class Mounting extends Component {

    constructor(props){
        super(props)
        this.state= {
            color : "Red"
        }
        console.log("Constructer Çalıştı -----", this.state.color)
    }

    static getDerivedStateFromProps(props, state){
      console.log("Get derived State ÇAlışıyor ---- ",state.color)

      return  {color : props.favcol}
    };

    componentDidMount(){
      setTimeout(() => {
        console.log("componentDidMount Çlışıyor")
        this.setState({color : "green"})
      }, 5000);
     
    }
    
  render() {
    console.log("render")
    return (
      <div>
        <h1>color : {this.state.color}</h1>
      </div>
    )
  }
}
