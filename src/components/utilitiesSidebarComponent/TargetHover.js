import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// hover target
targetHover={true}

// click target
targetHover={false}`

const TargetHover = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>targethover</Tag> is a booleon props which is used for changing the
        target from click to hover.
      </Text>
    </InfoCodeSidebar>
  )
}

export default TargetHover
