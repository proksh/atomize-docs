import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const displayCode1 = `// Left Icon
prefix={
    <Icon
        name="User"
        pos="absolute"
        left="1rem"
        top="50%"
        transform="translateY(-50%)"
    />
}

// Right Icon
prefix={
    <Icon
        name="Search"
        pos="absolute"
        right="1rem"
        top="50%"
        transform="translateY(-50%)"
    />
}`

const Prefix = () => {
  return (
    <InfoCodeSidebar code={displayCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>prefix</Tag> is used to place something before the component.
        Generally used to place the icons with the component.
      </Text>
    </InfoCodeSidebar>
  )
}

export default Prefix
