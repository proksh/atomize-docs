import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const transitionCode1 = `// Changing the transition value
<Div
  p={{ x: "2rem", y: "1rem" }}
  rounded="lg"
  bg="warning700"
  hoverBg="warning800"
  textAlign="center"
  textColor="white"
  hoverTextColor="warning300"
  transition
>
  Hover Me
</Div>`

class Transition extends React.Component {
  render() {
    return (
      <InfoCodeSidebar id="transition" code={transitionCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Transition
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
          You can pass <Tag>transition</Tag> to the element to add a transition
          effect between its css states and the default transition will be
          applied. You can <Link to="/docs/react/theme/theme#transition"></Link>edit
          this default trasition value by changing the in the theme.
        </Text>

        <Div
          p={{ x: "2rem", y: "1rem" }}
          rounded="lg"
          bg="warning700"
          hoverBg="warning800"
          textAlign="center"
          textColor="white"
          hoverTextColor="warning300"
          transition
        >
          Hover Me
        </Div>
      </InfoCodeSidebar>
    )
  }
}

export default Transition
