import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const borderCode2 = `// Info
foucsBorderColor="info800"

// Warning
foucsBorderColor="warning800"

// Danger
foucsBorderColor="danger800"

// Success
foucsBorderColor="success800"`

const FocusBorderColor = () => {
  return (
    <InfoCodeSidebar code={borderCode2}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>focusBorderColor</Tag> can be given to change the border color on
        focus.
      </Text>
    </InfoCodeSidebar>
  )
}

export default FocusBorderColor
