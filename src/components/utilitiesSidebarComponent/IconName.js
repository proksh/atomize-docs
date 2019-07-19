import React from "react"
import { Text } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const shadowCode1 = `// Add
name="Add"

// Dribbble
name="Dribbble"`

const IconName = () => {
  return (
    <InfoCodeSidebar code={shadowCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        Icon name are to given in name props. You can click on the icon to copy
        the code.
      </Text>
    </InfoCodeSidebar>
  )
}

export default IconName
