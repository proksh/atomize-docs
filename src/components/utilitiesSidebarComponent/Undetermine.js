import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// undetermine
undetermine={true}

// Not undetermine
undetermine={false}`

const Undetermine = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>undetermine</Tag> is a booleon props which is used for the
        undetermine state.
      </Text>
    </InfoCodeSidebar>
  )
}

export default Undetermine
