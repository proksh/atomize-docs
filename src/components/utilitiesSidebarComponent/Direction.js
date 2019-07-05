import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// bottomleft
direction="bottomleft"

// bottomright
direction="bottomright"

// topright
direction="topright"

// topleft
direction="topleft"

// righttop
direction="righttop"

// lefttop
direction="lefttop"`

const Direction = () => {
  return (
    <InfoCodeSidebar border={false} code={backgroundCode} pb="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>direction</Tag> is used to specify the direction in which menu
        opens. Its values can be any one of below.
      </Text>
    </InfoCodeSidebar>
  )
}

export default Direction
