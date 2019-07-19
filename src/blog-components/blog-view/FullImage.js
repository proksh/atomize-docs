import React from "react"
import { Div, Row, Col, Text, Container } from "atomize"
import ParallaxImage from "../common/ParallaxImg"

export default class FullImage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Div p={{ y: "4rem" }} bg="white">
        <Container>
          <Row>
            <Col size={12}>
              <ParallaxImage bgImg={data.image} p={{ b: "64%" }} />
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
