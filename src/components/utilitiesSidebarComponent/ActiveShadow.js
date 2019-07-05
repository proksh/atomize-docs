import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// Responsive
activeShadow={{ xs: '3', sm: '2' }}

// 2
activeShadow="2"

// 3
activeShadow="3"

// 4
activeShadow="4"`

const ActiveShadow = () => {
  return (
    <InfoCodeSidebar code={backgroundCode}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>activeShadow</Tag> is used for the shadow when state is active.
      </Text>
    </InfoCodeSidebar>
  )
}

export default ActiveShadow
