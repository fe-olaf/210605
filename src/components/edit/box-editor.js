import React, { useState } from 'react'

import ColorBox from './color-box'

function BoxEditor() {
  const [color, setColor] = useState()
  const [width, setWidth] = useState(50)

  return (
    <div>
      <ColorBox color={color} />
      <input
        placeholder="색상값"
        onChange={(event) => {
          setColor(event.target.value)
        }}
      />
    </div>
  )
}

export default BoxEditor
