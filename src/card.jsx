import React from 'react'

function card(props) {
  return (
    <div className="card">
    <img src={props.src } width="300px" alt="" />
    <div className="abC"> 
      <div className="logo"><img src="vite.svg" alt="" /></div>
      <div className="detail">
        <h1>{props.title}</h1>
        <div className="time">
        <p>{props.chan}</p>
        <p>{props.time} hr ago</p>
        </div>
        </div>
    </div>
  </div>
  )
}

export default card