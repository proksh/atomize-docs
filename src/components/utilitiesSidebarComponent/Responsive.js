import React from "react"
import { Div, Row, Col, Text, Tag, Icon } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const responsiveCode = `// Values are given as
{
    xs: { 'value for mobile devices & larger' },
    sm: { 'value for larger mobile & larger' },
    md: { 'value for tablets & larger' },
    lg: { 'value for small desktop & larger' },
    xl: { 'value for large desktop' }
}`

class Responsive extends React.Component {
  render() {
    return (
      <InfoCodeRow id="responsive" code={responsiveCode}>
        <Div>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Responsive
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
            Almost all the property can be made responsive by passing an array
            of <Tag>xs</Tag>, <Tag>sm</Tag>, <Tag>md</Tag>, <Tag>lg</Tag> &{" "}
            <Tag>xl</Tag> to the end value.
          </Text>
          {/* <Div d="flex" bg="info200" p="1rem" rounded="md">
            <Icon
              name="InfoSolid"
              size="18px"
              color="info800"
              m={{ r: "0.75rem", t: "0.125rem" }}
            />
            <Text textColor="dark" textWeight="500">
              Device size breakpoints can be modified in theme.
            </Text>
          </Div> */}
        </Div>
      </InfoCodeRow>
    )
  }
}

export default Responsive
