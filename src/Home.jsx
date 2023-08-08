import React from 'react'

function Home() {
  let obj ={name:"hhhh"}
  return (
    <>
    <div>Home</div>
    <div>
    <span>welcome to my page</span>
    </div>
    <button>click me</button><br></br>
    <label htmlFor='name'>name:</label>
    <input id="name" type='text'placeholder="type here"defaultValue={obj.name}></input> 
  </>
  )
}

export default Home