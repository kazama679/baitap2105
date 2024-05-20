import React, { useState } from 'react'

export default function Form() {
    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const handleClick=()=>{
        console.log(1);
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleChange2=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);
    }
  return (
    <div>
      <div>
        <label htmlFor="">tên</label>
        <input type="text" onChange={handleChange}/>
        <p>tên người dùng nhập: {name}</p>
        <label htmlFor="">email</label>
        <input type="text" onChange={handleChange2}/>
        <p>email người dùng nhập {email}</p>
        <button onClick={handleClick}>login</button>
      </div>
    </div>
  )
}
