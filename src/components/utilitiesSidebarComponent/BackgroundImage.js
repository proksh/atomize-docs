import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const backgroundCode = `// With background Image
bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
bgSize="cover"
bgPos="center"`

const BackgroundImage = () => {
  return (
    <InfoCodeSidebar code={backgroundCode} pt="0">
      <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
        An image can also be given in the background by{" "}
        <Tag>{"bgImg={value}"}</Tag>, <Tag>{"bgSize={value}"}</Tag> &{" "}
        <Tag>{"bgPos={value}"}</Tag>
      </Text>

      <Div
        bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
        bgSize="cover"
        bgPos="center"
        h="10rem"
      />
    </InfoCodeSidebar>
  )
}

export default BackgroundImage
