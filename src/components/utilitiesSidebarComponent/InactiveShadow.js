import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// Responsive
inactiveShadow={{ xs: '3', sm: '2' }}

// 2
inactiveShadow="2"

// 3
inactiveShadow="3"

// 4
inactiveShadow="4"`

const InactiveShadow = () => {
  return (
    <InfoCodeSidebar code={backgroundCode}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>inactiveShadow</Tag> is used for the shadow when state is inactive.
      </Text>
    </InfoCodeSidebar>
  )
}

export default InactiveShadow
