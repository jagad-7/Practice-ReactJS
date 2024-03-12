import React from 'react'

export default function ChildProp(props) {
    console.dir(props)
  return (
    <div>
        <h1 style={{display:'inline-flex', gap:30}}>{props.children}</h1>
    </div>
  )
}
