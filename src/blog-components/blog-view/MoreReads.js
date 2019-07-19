import React from "react"
import { Link } from "gatsby"
import { Div, Row, Col, Text, Container } from "atomize"
import ParallaxImg from "../common/ParallaxImg"

export default class MoreReads extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Div p={{ y: "5rem" }} bg="white">
        <Container>
          <Text textSize="title" fontFamily="secondary" m={{ b: "1rem" }}>
            More Reads
          </Text>
          <Row>
            {data.map((item, index) => (
              <Col size={{ xs: 12, md: 3 }} d="flex" flexDir="column">
                <Link to={item.link}>
                  <Div m={{ b: { xs: "3rem", md: "0" } }}>
                    <Div flexGrow="1">
                      <ParallaxImg bgImg={item.image} />
                      <Text textColor="black" m={{ y: "0.75rem" }}>
                        {item.title}
                      </Text>
                    </Div>

                    <Div border={{ t: "1px solid" }} borderColor="gray400">
                      <Text textColor="light" m={{ y: "0.5rem" }}>
                        {item.type}
                      </Text>
                    </Div>
                  </Div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Div>
    )
  }
}
