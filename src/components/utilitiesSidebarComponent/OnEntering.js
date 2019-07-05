import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// on enter
onEntering={() => console.log('entering')}`

const OnEnter = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>onEntering</Tag> is a function which will be fired when the
        component is entering (i.e. during animation).
      </Text>
    </InfoCodeSidebar>
  )
}

export default OnEnter
