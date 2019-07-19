import React from "react"
import { Link } from "gatsby"

import { Div, Text, Icon, Container } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import AvailableProps from "../common/AvailableProps"

const containerDocsCode1 = `// Container
import { Div, Container } from "atomize";

ReactDOM.render(
  <Container>
    {/* your Content goes here */}
  </Container>
  , mountNode
);`

const ContainerDocs = () => {
  return (
    <InfoCodeRow id="containerDocs" code={containerDocsCode1}>
      <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
        Container
      </Text>
      <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
        Containers are the most basic element for using our default grid system.
        Container max-width changes at each breakpoint defined in the theme to
        the max-width defined in each breakpoint. You can{" "}
        <Link to="/docs/react/theme#containerGutterWidth">edit grid variables</Link>{" "}
        by using theme.
      </Text>

      <Div m={{ b: "3rem" }}>
        <Container>
          <Div bg="warning700" p={{ y: "2rem" }} d="flex" align="center" />
        </Container>
      </Div>
      <Div d="flex" bg="warning200" p="1rem" rounded="md" m={{ b: "4rem" }}>
        <Icon
          name="AlertSolid"
          size="16px"
          color="warning700"
          m={{ r: "0.75rem", t: "0.25rem" }}
        />
        <Text textColor="dark" textWeight="500">
          You should avoid using padding, margin, width & max-width to
          container.
        </Text>
      </Div>

      <AvailableProps
        available={[
          "d",
          "align",
          "justify",
          "flexDir",
          "flexGrow",
          "flexWrap",
          "rounded",
          "bg",
          "hoverBg",
          "bgImg",
          "bgPos",
          "bgSize",
          "h",
          "minH",
          "maxH",
          "minW",
          "border",
          "borderColor",
          "hoverBorderColor",
          "textSize",
          "textWeight",
          "textDecor",
          "textTransform",
          "textAlign",
          "textColor",
          "hoverTextColor",
          "fontFamily",
          "shadow",
          "hoverShadow",
          "position",
          "top",
          "left",
          "right",
          "bottom",
          "transform",
          "transition",
          "overflow",
          "cursor",
        ]}
      />
    </InfoCodeRow>
  )
}

export default ContainerDocs
