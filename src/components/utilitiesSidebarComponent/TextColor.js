import React from "react"
import { Link } from "gatsby"
import { Text, Tag, Div } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const textCode1 = `// Responsive
textColor={{ xs: 'medium', md: 'black' }}

// info700
textColor="info700"

// warning700
textColor="warning700"

// danger700
textColor="danger700"

// success700
textColor="success700"`

const TextColor = () => {
  return (
    <InfoCodeSidebar code={textCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Text Color can be changed by passing <Tag>{"textColor={value}"}</Tag>.
      </Text>

      <Text textColor="info700" textSize="subheader" textWeight="500">
        Info700
      </Text>
      <Text textColor="warning700" textSize="subheader" textWeight="500">
        Warning700
      </Text>
      <Text textColor="danger700" textSize="subheader" textWeight="500">
        Danger700
      </Text>
      <Text textColor="success700" textSize="subheader" textWeight="500">
        Success700
      </Text>
    </InfoCodeSidebar>
  )
}

export default TextColor
