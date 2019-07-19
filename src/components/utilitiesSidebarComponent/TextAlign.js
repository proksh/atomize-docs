import React from "react"
import { Link } from "gatsby"
import { Text, Tag, Div } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const textCode1 = `// Responsive
textAlign={{ xs: "center", lg: "left" }}

// left
textAlign="left"

// center
textAlign="center"

// right
textAlign="right"

// justify
textAlign="justify"`

const TextTransform = () => {
  return (
    <InfoCodeSidebar code={textCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        TextAlign can be given to text by <Tag>{"textAlign={value}"}</Tag>.
      </Text>

      <Text textAlign="left" textSize="paragraph" m={{ b: "1rem" }}>
        This is left align text
      </Text>
      <Text textAlign="center" textSize="paragraph" m={{ b: "1rem" }}>
        This is center aligned text
      </Text>
      <Text textAlign="right" textSize="paragraph" m={{ b: "1rem" }}>
        This is right aligned text
      </Text>
      <Text textAlign="justify" textSize="paragraph" m={{ b: "1rem" }}>
        This text is justified, and you need to pass textAlign as justify for
        it.
      </Text>
    </InfoCodeSidebar>
  )
}

export default TextTransform
