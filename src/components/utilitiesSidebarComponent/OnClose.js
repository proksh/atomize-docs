import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// on close
onClose={() => console.log('closing')}`

const OnClose = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>onClose</Tag> is a function will be fired when the component is
        closing.
      </Text>
    </InfoCodeSidebar>
  )
}

export default OnClose
