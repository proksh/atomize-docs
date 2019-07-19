import React from "react"
import { Div, Row, Col, Container } from "atomize"

export default class ContentLarge extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Div p={{ y: "5rem" }} bg="white">
        <Container>
          <Row>
            <Col size={{ xs: 12, md: 8 }} offset={{ xs: 0, md: 2 }}>
              <Div d="flex" flexDir="column" align="center">
                {data}
              </Div>
            </Col>
          </Row>
        </Container>
      </Div>
    )
  }
}
