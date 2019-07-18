import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Text, Div, Row, Col, Anchor } from "react-atomize"
import DocsWrapper from "../../../components/common/DocsWrapper"

const UITemplates = () => (
  <Layout>
    <SEO
      title="UI Templates"
      description="List of fully customizable tempalates available for sale build atomize design system."
    />
    <DocsWrapper>
      <Div p={{ x: { xs: "1.5rem", md: "4rem" }, t: "5rem", b: "10rem" }}>
        <Text textSize="display2" m={{ b: "1rem" }}>
          Templates
        </Text>
        <Text m={{ b: "4rem" }} textColor="medium">
          To sell your own template in atomize, you{" "}
          <Anchor href="mailto:prokshh@gmail.com"> can request to sell </Anchor>
          here with a demo link of the template and cost.
        </Text>
        <Row>
          <Col size={{ xs: 12, md: 6 }}>
            <Anchor href="https://italic.com/" target="_blanc">
              <Div
                m={{ b: "1rem" }}
                p={{ b: "70%" }}
                rounded="lg"
                shadow="2"
                hoverShadow="4"
                cursor="pointer"
                bg="gray200"
                bgSize="cover"
                border="1px solid"
                borderColor="gray200"
                transition
              ></Div>
            </Anchor>
            <Text m={{ b: "2rem" }} textAlign="center">
              Basic Landing Page
            </Text>
          </Col>
        </Row>
      </Div>
    </DocsWrapper>
  </Layout>
)

export default UITemplates
