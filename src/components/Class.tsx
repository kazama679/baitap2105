import React, { Component } from 'react'
interface Props{}
interface State{
    count:number
}
let interval1:any;
export default class Class extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            count:0
        }
    }
    componentDidMount(): void {
        interval1=setInterval(()=>{
            console.log('interval được gọi');
        },2000);
    }
    stopI=()=>{
        console.log(1);
        clearInterval(interval1)
    }   
  render() {
    return (
      <div>
        <button onClick={this.stopI}>dừng</button>
      </div>
    )
  }
}