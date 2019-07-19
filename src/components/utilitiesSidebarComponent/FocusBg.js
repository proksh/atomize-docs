import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// bg warning
focusBg="warning700"

// bg info
focusBg="info700"

// bg danger
focusBg="danger700"

// bg success
focusBg="success700"`

const FocusBackground = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>focusBg</Tag> can be used to specify the background color on focus.
      </Text>
    </InfoCodeSidebar>
  )
}

export default FocusBackground
