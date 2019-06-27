import React from "react"
import { Div } from "react-atomize"

import ColorDiv from "./ColorDiv.js"

const ColorList = ({ colorName, ...rest }) => {
  return (
    <Div d="flex" {...rest}>
      {[9, 8, 7, 6, 5, 4, 3, 2, 1].map(number => (
        <ColorDiv
          colorName={colorName}
          shade={`${10 - number}00`}
          key={number}
        />
      ))}
    </Div>
  )
}

export default ColorList
