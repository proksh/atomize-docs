import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const shadowCode1 = `// info700
hoverColor="info700"

// warning700
hoverColor="warning700"

// danger700
hoverColor="danger700"

// success700
hoverColor="success700"`

const IconHoverColor = () => {
  return (
    <InfoCodeSidebar code={shadowCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Icon color can be changed on hover by <Tag>{"hoverColor={value}"}</Tag>.
        Value can be any color from the theme.
      </Text>
    </InfoCodeSidebar>
  )
}

export default IconHoverColor
