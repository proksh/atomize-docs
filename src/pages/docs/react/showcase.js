import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Text, Div, Row, Col, Anchor } from "atomize"
import DocsWrapper from "../../../components/common/DocsWrapper"
import italic from "../../../images/showcase/italic.png"
import anteelo from "../../../images/showcase/anteelo.png"

const Showcase = () => (
  <Layout>
    <SEO
      title="Showcase"
      description="List of Website using atomize design system for their ui."
    />
    <DocsWrapper>
      <Div p={{ x: { xs: "1.5rem", md: "4rem" }, t: "5rem", b: "10rem" }}>
        <Text tag="h2" textWeight="400" textSize="display2" m={{ b: "1rem" }}>
          Who's using Atomize?
        </Text>
        <Text m={{ b: "4rem" }} textColor="medium">
          Check out these apps built using Atomize. Send us a{" "}
          <Anchor href="mailto:prokshh@gmail.com">pull request</Anchor> to add
          your app to this list.
        </Text>
        <Row>
          <Col size={{ xs: 12, md: 6 }}>
            <Anchor href="https://italic.com/" target="_blank">
              <Div
                m={{ b: "1rem" }}
                p={{ b: "70%" }}
                rounded="lg"
                shadow="2"
                hoverShadow="4"
                cursor="pointer"
                bgImg={italic}
                bgSize="cover"
                border="1px solid"
                borderColor="gray200"
                transition
              ></Div>
            </Anchor>
            <Text m={{ b: "2rem" }} textAlign="center">
              Italic | Luxury without labels
            </Text>
          </Col>
          <Col size={{ xs: 12, md: 6 }}>
            {/* <Anchor href="https://anteelo.com/" target="_blank">
              <Div
                m={{ b: "1rem" }}
                p={{ b: "70%" }}
                rounded="lg"
                shadow="2"
                hoverShadow="4"
                cursor="pointer"
                bgImg={anteelo}
                bgSize="cover"
                border="1px solid"
                borderColor="gray200"
                transition
              ></Div>
            </Anchor>
            <Text m={{ b: "2rem" }} textAlign="center">
              Anteelo | Product Design Firm
            </Text> */}
          </Col>
        </Row>
      </Div>
    </DocsWrapper>
  </Layout>
)

export default Showcase
