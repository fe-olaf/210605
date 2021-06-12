import React from 'react'

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        backgroundColor: color,
      }}
    >
      Box
    </div>
  )
}

export default ColorBox
