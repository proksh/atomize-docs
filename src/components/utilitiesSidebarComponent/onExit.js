import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// on exit
onExit={() => console.log('exit')}`

const OnExit = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>onExit</Tag> is a function will be fired when the component starts
        exit.
      </Text>
    </InfoCodeSidebar>
  )
}

export default OnExit
