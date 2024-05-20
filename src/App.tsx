import React from 'react'
import Class from './components/Class'
import Form from './components/Form'
import Bai1 from './components/baitap/Bai1'
import Bai2 from './components/baitap/Bai2'
import Bai3 from './components/baitap/Bai3'
import Bai4 from './components/baitap/Bai4'
import Bai5 from './components/baitap/Bai5'
import Bai6 from './components/baitap/Bai6'
import Bai7 from './components/baitap/Bai7'
import Bai8 from './components/baitap/Bai8'
import Bai10 from './components/baitap/Bai10'

export default function App() {
  // // setTimeout(()=>{
  // //   console.log(1);
  // // },1000)
  // let interval=setInterval(()=>{
  //   console.log('setInterval');
  // },2000);
  // // khi viết hàm setInterval và setTimeout thì viết trong  component diMount
  // const stopInterval=()=>{
  // console.log('dừng');
  //   clearInterval(interval);
  // }
  return (
    <div>
      {/* <Class></Class> */}
      {/* <button onClick={stopInterval}>dừng</button> */}
      {/* <Form></Form> */}
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7>
      <Bai8></Bai8>
      <Bai10></Bai10>
    </div>
  )
}