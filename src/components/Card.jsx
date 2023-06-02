import React from 'react'

export default function Card(props) {
  return (
    <div id='divCard'>
        {props.cardChoosen()}
    </div>
  )
}
