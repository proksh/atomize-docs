import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const shadowCode1 = `// px
size="20px"

// rem
size="1rem"

// %
size="100%"`

const IconSize = () => {
  return (
    <InfoCodeSidebar code={shadowCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Icon Size are to given as <Tag>{"size={value}"}</Tag>. Default value is
        24px.
      </Text>
    </InfoCodeSidebar>
  )
}

export default IconSize
