import React from "react"
import { Link } from "gatsby"
import { Div, Text, Tag, Row, Col } from "atomize"

import InfoCodeSidebar from "../common/InfoCodeSidebar"

const shadowCode1 = `// Responsive
focusShadow={{ xs: '4', md: '3', lg: '1' }}

// Shadow 1
focusShadow="1"

// Shadow 2
focusShadow="2"

// Shadow 3
focusShadow="3"

// Shadow 4
focusShadow="4"

// Shadow 5
focusShadow="5"`

const FocusShadow = () => {
  return (
    <InfoCodeSidebar code={shadowCode1}>
      <Text textColor="medium" textSize="body" m={{ b: "3rem" }}>
        Focus Shadow can be changed through <Tag>{"focusShadow={value}"}</Tag>.
        You can <Link to="/docs/react/theme#shadows">edit or add shadows</Link> by
        using theme.
      </Text>
    </InfoCodeSidebar>
  )
}

export default FocusShadow
