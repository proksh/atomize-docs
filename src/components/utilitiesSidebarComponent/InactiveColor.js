import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// info
inactiveColor="info800"

// success
inactiveColor="success800"

// warning
inactiveColor="warning800"

// danger
inactiveColor="danger800"`

const InactiveColor = () => {
  return (
    <InfoCodeSidebar code={backgroundCode}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>inactiveColor</Tag> is used for the color when state is not active.
      </Text>
    </InfoCodeSidebar>
  )
}

export default InactiveColor
