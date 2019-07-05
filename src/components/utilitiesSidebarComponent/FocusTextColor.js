import React from "react"
import { Link } from "gatsby"
import { Text, Tag, Div } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const textCode1 = `// Responsive
focusTextColor={{ xs: 'medium', md: 'black' }}

// info700
focusTextColor="info700"

// warning700
focusTextColor="warning700"

// danger700
focusTextColor="danger700"

// success700
focusTextColor="success700"`

const FocusTextColor = () => {
  return (
    <InfoCodeSidebar code={textCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Focus Text Color can be changed by passing{" "}
        <Tag>{"focusTextColor={value}"}</Tag>.
      </Text>
    </InfoCodeSidebar>
  )
}

export default FocusTextColor
