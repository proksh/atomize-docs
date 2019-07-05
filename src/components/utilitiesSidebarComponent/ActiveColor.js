import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// info
activeColor="info800"

// success
activeColor="success800"

// warning
activeColor="warning800"

// danger
activeColor="danger800"`

const ActiveColor = () => {
  return (
    <InfoCodeSidebar code={backgroundCode}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>activeColor</Tag> is used for the color when state is active.
      </Text>
    </InfoCodeSidebar>
  )
}

export default ActiveColor
