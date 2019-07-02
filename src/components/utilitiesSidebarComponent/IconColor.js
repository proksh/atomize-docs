import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const shadowCode1 = `// info700
color="info700"

// warning700
color="warning700"

// danger700
color="danger700"

// success700
color="success700"`

const IconColor = () => {
  return (
    <InfoCodeSidebar code={shadowCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Icon color are to given as <Tag>{"color={value}"}</Tag>. Value can be
        any color from the theme.
      </Text>
    </InfoCodeSidebar>
  )
}

export default IconColor
