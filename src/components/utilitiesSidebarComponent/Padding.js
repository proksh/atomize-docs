import React from "react"
import { Div, Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const paddingCode1 = `// With Single Value
p="3rem"

// With Responsive Values
p={{ xs: "3rem", md: "5rem" }}
`

const paddingCode2 = `// Directional padding
p={{ l: '2rem', r: '3rem', y: '5rem' }}

// Directional padding with responsive
p={{
    l: '2rem',
    r: { xs: '1rem', md: '3rem' },
    y: '5rem'
}}
`

const Padding = () => {
  return (
    <>
      <InfoCodeSidebar code={paddingCode1}>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Padding can be given to any element by using{" "}
          <Tag m={{ x: "0.25rem" }}>{"p={value}"}</Tag>as props. To keep the
          design under 8px grid, we keep the html font size to 16px. Though you
          can use any value to padding & margin. We recommend using{" "}
          <Tag>rem</Tag> to specify Padding & Margin.
        </Text>

        <Div p="3rem" bg="warning200">
          <Div h="4rem" bg="warning400" />
        </Div>
      </InfoCodeSidebar>
      <InfoCodeSidebar pt="0" code={paddingCode2}>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          An array with <Tag>l</Tag>,<Tag>r</Tag>,<Tag>t</Tag>,<Tag>b</Tag>,
          <Tag>x</Tag> & <Tag>y</Tag> can be given to have padding in left,
          right, top, bottom, horizontal & vertical directions respectively.
        </Text>
        <Div p={{ l: "3rem", t: "4rem" }} bg="warning200">
          <Div h="8rem" bg="warning400" />
        </Div>
      </InfoCodeSidebar>
    </>
  )
}

export default Padding
