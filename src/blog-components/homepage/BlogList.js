import React from "react"

import { Div, Text, Container, Col, Row } from "atomize"
import BlogListItem from "../common/BlogListItem"

export default class BlogList extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Div
        p={{
          t: "2rem",
          b: { xs: "8rem", sm: "14rem", md: "18rem", lg: "24rem" },
        }}
        bg="white"
        overflow="hidden"
        cursor="pointer"
      >
        <Container>
          <Text
            textAlign="center"
            fontFamily="secondary"
            textSize="display1"
            m={{ b: "4rem" }}
          >
            {data.title}
          </Text>
          <Row>
            {data.list.map((blog, index) => (
              <Col size={{ xs: 12, sm: 6 }}>
                <BlogListItem blog={blog} index={index} />
              </Col>
            ))}
          </Row>
        </Container>
      </Div>
    )
  }
}
