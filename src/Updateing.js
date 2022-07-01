import React, { Component } from 'react';

export default class Updating extends Component {
    constructor(props) {
        super(props);   
        this.state = {
             renderVal : true, 
             date: new Date(),
            };
      }

      static getDerivedStateFromProps(props,state){
        console.log(state.date)
        return "hello"
      }
   
    componentDidUpdate = () => {
        console.log("updateing")
    }
    shouldComponentUpdate(){
        return this.state.rederVal;
      }

    stop(val){
        if(val === "start"){
            setInterval(() => {
                return this.setState({date: new Date()})
              }, 1000);
              this.setState({rederVal: true})

        }
        else if (val === "stop"){
            return this.setState({ rederVal : false})
    
            }
        
        
    }
      render() {
        console.log(this.state.date)
        return (        
            <div>It is {this.state.date.toLocaleTimeString()}. <br></br>
            <button type='button' onClick={()=> this.stop("start")}>Saati Başlat</button>
            <button type='button' onClick={()=> this.stop("stop")}>Saati Durdur</button>

            </div>
        );
      }
    }