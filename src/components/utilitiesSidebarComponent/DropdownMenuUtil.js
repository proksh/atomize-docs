import React from "react"
import { Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// Menu
menu={
    <DropdownMenu>
        {["Option 1", "Option 2", "Option 3"].map((name, index) => (
        <Anchor d="block" p={{ y: "0.25rem" }}>
            {name}
        </Anchor>
        ))}
    </DropdownMenu>
}`

const DropdownMenuUtil = () => {
  return (
    <InfoCodeSidebar code={backgroundCode}>
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        <Tag>menu</Tag> is used define the content inside the dropdown menu. It
        must be wrapped around the <Tag>{"<DropdownMenu />"}</Tag>.
      </Text>
    </InfoCodeSidebar>
  )
}

export default DropdownMenuUtil
