import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// loading
isLoading={true}

// Not loading
isLoading={false}`

const IsLoading = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>isLoading</Tag> is a booleon props which is used for the loading
        state.
      </Text>
    </InfoCodeSidebar>
  )
}

export default IsLoading
