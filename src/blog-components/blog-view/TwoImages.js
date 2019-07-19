import React from "react"
import { Div, Row, Col, Text, Container } from "atomize"
import ParallaxImage from "../common/ParallaxImg"

export default class TwoImages extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Div p={{ y: "4rem" }} bg="white">
        <Container>
          <Row>
            <Col size={{ xs: 12, sm: 6 }}>
              <Div m={{ b: { xs: "2rem", sm: "0" } }}>
                <ParallaxImage bgImg={data.image1.link} />
                <Text textColor="light" m={{ y: "0.5rem" }}>
                  {data.image1.description}
                </Text>
              </Div>
            </Col>
            <Col size={{ xs: 12, sm: 6 }}>
              <Div>
                <ParallaxImage bgImg={data.image2.link} />
                <Text textColor="light" m={{ y: "0.5rem" }}>
                  {data.image2.description}
                </Text>
              </Div>
            </Col>
          </Row>
        </Container>
      </Div>
    )
  }
}
