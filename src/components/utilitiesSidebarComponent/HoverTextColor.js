import React from "react"
import { Link } from "gatsby"
import { Text, Tag, Div } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const textCode1 = `// Responsive
hoverTextColor={{ xs: 'medium', md: 'black' }}

// info700
hoverTextColor="info700"

// warning700
hoverTextColor="warning700"

// danger700
hoverTextColor="danger700"

// success700
hoverTextColor="success700"`

const HoverTextColor = () => {
  return (
    <InfoCodeSidebar code={textCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Hover Text Color can be changed by passing{" "}
        <Tag>{"hoverTextColor={value}"}</Tag>.
      </Text>

      <Text hoverTextColor="info700" textSize="subheader" textWeight="500">
        Info700
      </Text>
      <Text hoverTextColor="warning700" textSize="subheader" textWeight="500">
        Warning700
      </Text>
      <Text hoverTextColor="danger700" textSize="subheader" textWeight="500">
        Danger700
      </Text>
      <Text hoverTextColor="success700" textSize="subheader" textWeight="500">
        Success700
      </Text>
    </InfoCodeSidebar>
  )
}

export default HoverTextColor
