import React from "react"
import { Link } from "gatsby"
import { Text, Tag, Div } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const textCode1 = `// Responsive
textSize={{ xs: "tiny", md: "body" }}

// tiny
textSize="tiny"

// caption
textSize="caption"

// body
textSize="body"

// paragraph
textSize="paragraph"

// subheader
textSize="subheader"

// title
textSize="title"

// heading
textSize="heading"

// display1
textSize="display1"

// display2
textSize="display2"

// display3
textSize="display3"`

const TextSize = () => {
  return (
    <InfoCodeSidebar code={textCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Size can be given to text by <Tag>{"textSize={value}"}</Tag>. Where
        value is the size defined in theme. You can{" "}
        <Link to="/docs/react/theme#fontSize">add or edit sizes</Link> by using theme.
      </Text>

      <Div m={{ b: "1rem" }}>
        <FontRow size="tiny" />
        <FontRow size="caption" />
        <FontRow size="body" />
        <FontRow size="paragraph" />
        <FontRow size="subheader" />
        <FontRow size="title" />
        <FontRow size="heading" />
        <FontRow size="display1" />
        <FontRow size="display2" />
        <FontRow size="display3" />
      </Div>
    </InfoCodeSidebar>
  )
}

export default TextSize

const FontRow = ({ size }) => {
  return (
    <Div d="flex" align="flex-end">
      <Text w="6rem">{size}</Text>
      <Div textSize={size}>Typography</Div>
    </Div>
  )
}
