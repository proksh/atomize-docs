import React from "react"
import { Div, Row, Col, Container } from "atomize"

export default class ContentSmall extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Div p={{ y: "2rem" }} bg="white">
        <Container>
          <Row>
            <Col size={{ xs: 10, md: 6 }} offset={{ xs: 1, md: 3 }}>
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
