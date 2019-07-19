import React from "react"
import { Div, Row, Col, Text, Container } from "atomize"
import ParallaxImage from "../common/ParallaxImg"

export default class SmallImg extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Div p={{ y: "4rem" }} bg="white">
        <Container>
          <Row>
            <Col size={{ xs: 10, md: 6 }} offset={{ xs: 1, md: 3 }}>
              <ParallaxImage bgImg={data.image} />
              <Text textColor="light" m={{ y: "0.5rem" }}>
                {data.description}
              </Text>
            </Col>
          </Row>
        </Container>
      </Div>
    )
  }
}
