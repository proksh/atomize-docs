import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const borderCode1 = `// With solid and dashed borders
<Div
  h="3rem"
  border="1px solid"
  borderColor="black"
  m={{ b: "1rem" }}
/>
<Div
  h="3rem"
  border="2px dashed"
  borderColor="brand700"
  m={{ b: "4rem" }}
/>
`

const borderCode2 = `// Changing Border Color on hover
<Div
  h="3rem"
  border="2px solid"
  borderColor="brand700"
  hoverBorderColor="black"
  transition
/>
`

const Border = () => {
  return (
    <>
      <InfoCodeRow id="border" border={false} code={borderCode1} pb="0">
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Border
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Border can be defined by using 2 properties - i.e.,{" "}
          <Tag>{"border={value}"}</Tag> & <Tag>{"borderColor={value}"}</Tag>.
          Both of them can are responsive separately. Color can be any value of
          color from the theme. You can{" "}
          <Link to="/docs/theme#addEditColors">edit or add more colors</Link>{" "}
          values by theme.
        </Text>

        <Div
          h="3rem"
          border="1px solid"
          borderColor="black"
          m={{ b: "1rem" }}
        />
        <Div
          h="3rem"
          border="2px dashed"
          borderColor="brand700"
          m={{ b: "4rem" }}
        />
      </InfoCodeRow>
      <InfoCodeRow code={borderCode2} pt="0">
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Border Color can also be changed on hover by passing{" "}
          <Tag>{"hoverBorderColor={value}"}</Tag> to the component.
        </Text>

        <Div
          h="3rem"
          border="2px solid"
          borderColor="brand700"
          hoverBorderColor="black"
          transition
        />
      </InfoCodeRow>
    </>
  )
}

export default Border
