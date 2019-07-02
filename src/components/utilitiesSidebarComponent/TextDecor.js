import React from "react"
import { Link } from "gatsby"
import { Text, Tag, Div } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const textCode1 = `// none
textDecor="none"

// overline
textDecor="overline"

// line-through
textDecor="line-through"

// underline
textDecor="underline"`

const TextDecor = () => {
  return (
    <InfoCodeSidebar code={textCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Text Decoration can be given to text by <Tag>{"textDecor={value}"}</Tag>
        .
      </Text>
      <Text textDecor="overline" textSize="subheader">
        overline
      </Text>
      <Text textDecor="line-through" textSize="subheader">
        line-through
      </Text>
      <Text textDecor="underline" textSize="subheader">
        underline
      </Text>
      <Text textDecor="none" textSize="subheader">
        none
      </Text>
    </InfoCodeSidebar>
  )
}

export default TextDecor
