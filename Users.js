import React from 'react'

export default function Users(props) {
  return (
    <div style={{border: '2px solid gray', width:'300px', margin:'30px'}}>
        <h1>Id: {props.id}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Age: {props.age}</h3>
        <h4>Place: {props.place}</h4>
    </div>
  )
}
