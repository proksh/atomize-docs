import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const displayCode1 = `// Left Icon
closeSuffix={
    <Icon
        name="UpArrow"
        pos="absolute"
        left="1rem"
        top="50%"
        transform="translateY(-50%)"
    />
}

// Right Icon
closeSuffix={
    <Icon
        name="UpArrow"
        pos="absolute"
        right="1rem"
        top="50%"
        transform="translateY(-50%)"
    />
}`

const CloseSuffix = () => {
  return (
    <InfoCodeSidebar code={displayCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>closeSuffix</Tag> is used to place something after the component
        when the component is inactive. Generally used to place the icons with
        the component.
      </Text>
    </InfoCodeSidebar>
  )
}

export default CloseSuffix
