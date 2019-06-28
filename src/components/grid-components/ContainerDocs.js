import React from "react"
import { Link } from "gatsby"

import { Div, Text, Icon, Container } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const containerDocsCode1 = `// Container
import { Div, Container } from "react-atomize";

ReactDOM.render(
  <Container>
    {/* your Content goes here */}
  </Container>
  , mountNode
);`

const ContainerDocs = () => {
  return (
    <>
      <InfoCodeRow id="containerDocs" code={containerDocsCode1}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Container
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          Containers are the most basic element for using our default grid
          system. Container max-width changes at each breakpoint defined in the
          theme to the max-width defined in each breakpoint. You can{" "}
          <Link to="/docs/theme#containerGutterWidth">edit grid variables</Link>{" "}
          by using theme.
        </Text>

        <Div m={{ b: "3rem" }}>
          <Container>
            <Div bg="warning700" p={{ y: "2rem" }} d="flex" align="center" />
          </Container>
        </Div>
        <Div d="flex" bg="danger300" p="1rem" rounded="md">
          <Icon
            name="AlertSolid"
            size="16px"
            color="danger700"
            m={{ r: "0.75rem", t: "0.25rem" }}
          />
          <Text textColor="danger700" textWeight="500">
            You should avoid using padding and margin to container.
          </Text>
        </Div>
      </InfoCodeRow>
    </>
  )
}

export default ContainerDocs
