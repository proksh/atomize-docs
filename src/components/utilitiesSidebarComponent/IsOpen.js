import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// Open
isOpen={true}

// Closed
isOpen={false}`

const IsOpen = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>isOpen</Tag> is a booleon props which is used for the open state.
      </Text>
    </InfoCodeSidebar>
  )
}

export default IsOpen
