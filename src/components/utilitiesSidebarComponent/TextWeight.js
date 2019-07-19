import React from "react"
import { Link } from "gatsby"
import { Text, Tag, Div } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const textCode1 = `// Responsive
textWeight={{ xs: '400', md: '500' }}

// 300
textWeight="300"

// 400
textWeight="400"

// 500
textWeight="500"

// 600
textWeight="600"

// 700
textWeight="700"

// 800
textWeight="800"

// 900
textWeight="900"`

const TextWeight = () => {
  return (
    <InfoCodeSidebar code={textCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Weight can be given to text by <Tag>{"textWeight={value}"}</Tag>.
      </Text>

      <Text textWeight="300" textSize="subheader">
        300
      </Text>
      <Text textWeight="400" textSize="subheader">
        400
      </Text>
      <Text textWeight="500" textSize="subheader">
        500
      </Text>
      <Text textWeight="600" textSize="subheader">
        600
      </Text>
      <Text textWeight="700" textSize="subheader">
        700
      </Text>
      <Text textWeight="800" textSize="subheader">
        800
      </Text>
      <Text textWeight="900" textSize="subheader">
        900
      </Text>
    </InfoCodeSidebar>
  )
}

export default TextWeight
