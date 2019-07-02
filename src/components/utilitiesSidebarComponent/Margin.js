import React from "react"
import { Div, Text, Tag } from "react-atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const marginCode1 = `// With Single Value
m="3rem"

// With Responsive Values
m={{ xs: "3rem", md: "5rem" }}
`

const marginCode2 = `// Directional margin
m={{ l: '2rem', r: '3rem', y: '5rem' }}

// Directional margin with responsive
m={{
    l: '2rem',
    r: { xs: '1rem', md: '3rem' },
    y: '5rem'
}}
`

const Margin = () => {
  return (
    <>
      <InfoCodeSidebar code={marginCode1}>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          Margin can be given to any element by using{" "}
          <Tag m={{ x: "0.25rem" }}>{"m={value}"}</Tag>as props. To keep the
          design under 8px grid, we keep the html font size to 16px. Though you
          can use any value to padding & margin. We recommend using{" "}
          <Tag>rem</Tag> to specify Padding & Margin.
        </Text>

        <Div p="3rem" bg="warning200" m={{ b: "1rem" }}>
          <Div h="4rem" bg="warning400" />
        </Div>
      </InfoCodeSidebar>

      <InfoCodeSidebar code={marginCode2} pt="0">
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          An array with <Tag>l</Tag>,<Tag>r</Tag>,<Tag>t</Tag>,<Tag>b</Tag>,
          <Tag>x</Tag> & <Tag>y</Tag> can be given to have padding in left,
          right, top, bottom, horizontal & vertical directions respectively.
        </Text>

        <Div p="3rem" bg="warning200">
          <Div h="4rem" bg="warning400" />
        </Div>
      </InfoCodeSidebar>
    </>
  )
}

export default Margin
