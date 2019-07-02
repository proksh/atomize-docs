import React from "react"
import { Link } from "gatsby"
import { Div, Icon, Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const textCode1 = `// Responsive Font Family
fontFamily={{ xs: 'primmary', xs: 'secondary' }}

// Primary
fontFamily="primary"

// Secondary
fontFamily="secondary"

// Code
fontFamily="code"`

const FontFamily = () => {
  return (
    <InfoCodeSidebar code={textCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        There are three types of font family available by deafult -{" "}
        <Tag>primary</Tag>, <Tag>secondary</Tag> & <Tag>code</Tag>. This font
        family can be provided by <Tag>fontFamily</Tag> prop to the component.
        You can <Link to="/docs/theme#fontfamily">edit or add a new font</Link>{" "}
        varible by using theme.
      </Text>

      <Text textSize="subheader" fontFamily="primary" m={{ b: "0rem" }}>
        primary
      </Text>
      <Text textSize="subheader" fontFamily="secondary" m={{ b: "0rem" }}>
        secondary
      </Text>
      <Text textSize="subheader" fontFamily="code" m={{ b: "0rem" }}>
        code
      </Text>
    </InfoCodeSidebar>
  )
}

export default FontFamily
