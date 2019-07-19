import React from "react"
import { Link } from "gatsby"
import { Text, Tag, Div } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const textCode1 = `// uppercase
textTransform="uppercase"

// lowercase
textTransform="lowercase"

// capitalize
textTransform="capitalize"`

const TextTransform = () => {
  return (
    <InfoCodeSidebar code={textCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Text Transform can be given to text by{" "}
        <Tag>{"textTransform={value}"}</Tag>.
      </Text>

      <Text textTransform="uppercase" textSize="subheader">
        uppercase
      </Text>
      <Text textTransform="lowercase" textSize="subheader">
        lowercase
      </Text>
      <Text textTransform="capitalize" textSize="subheader">
        capitalize
      </Text>
    </InfoCodeSidebar>
  )
}

export default TextTransform
