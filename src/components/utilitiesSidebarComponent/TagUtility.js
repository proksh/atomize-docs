import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag, Row, Col } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const shadowCode1 = `// Span
tag="span"

// Label
tag="label"

// h1
tag="h1"

// header
tag="header"

// section
tag="section"`

const TagUtility = () => {
  return (
    <InfoCodeSidebar code={shadowCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Tag can be given in order to change the default tag to some other by{" "}
        <Tag>{"tag={value}"}</Tag>
      </Text>
    </InfoCodeSidebar>
  )
}

export default TagUtility
