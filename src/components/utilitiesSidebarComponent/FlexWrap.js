import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const paddingCode1 = `// Wrap
flexWrap="wrap"

// No Wrap
flexWrap="nowrap"

// Reverse Wrap
flexWrap="wrap-reverse"

// Responsive Flex Wrap
flexWrap={{ xs: 'nowrap', md: 'wrap' }}`

const FlexWrap = () => {
  return (
    <>
      <InfoCodeSidebar code={paddingCode1}>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          flexWrap is equivalent to <Tag>flex-wrap</Tag>. It is used to define
          weather the blocks inside the flex needs to be wraped when their size
          is greater than it.
        </Text>
        <Text textColor="medium" textSize="body">
          Note: flexWrap only works when display <Tag>flex</Tag>.
        </Text>
      </InfoCodeSidebar>
    </>
  )
}

export default FlexWrap
