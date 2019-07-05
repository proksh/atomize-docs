import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// on exited
onExited={() => console.log('exited')}`

const OnExited = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>onExited</Tag> is a function will be fired when the component has
        been exited.
      </Text>
    </InfoCodeSidebar>
  )
}

export default OnExited
