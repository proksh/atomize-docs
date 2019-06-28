import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const backgroundCode1 = `// With some background Color
<Div
  bg="warning700"
  hoverBg="warning800"
  h="3rem"
  m={{ b: "4rem" }}
/>
`

const backgroundCode2 = `// With background Image
<Div
  bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
  bgSize="cover"
  bgPos="center"
  h="10rem"
/>
`

const Background = () => {
  return (
    <>
      <InfoCodeRow id="background" border={false} code={backgroundCode1} pb="0">
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Background
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Background and Hover Background can be given by{" "}
          <Tag>{"bg={value}"}</Tag> and <Tag>{"hoverBg={value}"}</Tag>
          respectively where value can be any color from the theme. You can{" "}
          <Link to="/docs/theme#addEditColors">edit or add color</Link> using
          theme.
        </Text>

        <Div bg="warning700" hoverBg="warning800" h="3rem" m={{ b: "4rem" }} />
      </InfoCodeRow>

      <InfoCodeRow code={backgroundCode2} pt="0">
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
      </InfoCodeRow>
    </>
  )
}

export default Background
