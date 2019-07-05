import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// on enter
onEnter={() => console.log('enter')}`

const OnEnter = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>onEnter</Tag> is a function will be fired when the component starts
        to enter.
      </Text>
    </InfoCodeSidebar>
  )
}

export default OnEnter
