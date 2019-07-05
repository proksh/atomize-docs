import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// disabled
disabled={true}

// Not disabled
disabled={false}`

const Disabled = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>disabled</Tag> is a booleon props which is used for the disabled
        state.
      </Text>
    </InfoCodeSidebar>
  )
}

export default Disabled
