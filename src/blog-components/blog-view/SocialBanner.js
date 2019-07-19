import React from "react"
import { Div, Row, Col, Text, Icon, Button, Container } from "atomize"

export default class SocialBanner extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Div p={{ y: "8rem" }} bg="white">
        <Container>
          <Row>
            <Col size={2} d="flex">
              <Div d="flex" flexDir="column" align="center">
                <Icon name="Facebook" m={{ b: "1rem" }} size="20px" />
                <Icon name="Twitter" m={{ b: "1rem" }} size="20px" />
                <Icon name="Linkedin" m={{ b: "1rem" }} size="20px" />
              </Div>
            </Col>
            <Col size={{ xs: 10, md: 8 }}>
              <Text fontFamily="secondary" textSize="display1">
                {data.text}
              </Text>
            </Col>
          </Row>
        </Container>
      </Div>
    )
  }
}
