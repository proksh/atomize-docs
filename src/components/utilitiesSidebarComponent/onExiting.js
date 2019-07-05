import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// on exiting
onExiting={() => console.log('exiting')}`

const OnExiting = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>onExiting</Tag> is a function will be fired when the component is
        exiting (i.e. during exit animation).
      </Text>
    </InfoCodeSidebar>
  )
}

export default OnExiting
