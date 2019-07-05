import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const displayCode1 = `// Left Icon
suffix={
    <Icon
        name="User"
        pos="absolute"
        left="1rem"
        top="50%"
        transform="translateY(-50%)"
    />
}

// Right Icon
suffix={
    <Icon
        name="Search"
        pos="absolute"
        right="1rem"
        top="50%"
        transform="translateY(-50%)"
    />
}`

const Suffix = () => {
  return (
    <InfoCodeSidebar code={displayCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>suffix</Tag> is used to place something after the component.
        Generally used to place the icons with the component.
      </Text>
    </InfoCodeSidebar>
  )
}

export default Suffix
