import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { Text, Button, Div, Anchor, Icon, Row, Col } from "react-atomize"
import DocsWrapper from "../../components/common/DocsWrapper"
import Intro from "../../components/introduction/Intro"

const IntroDocs = () => (
  <Layout>
    <SEO title="Home" />
    <DocsWrapper>
      <Div p={{ x: { xs: "2rem", md: "4rem" }, t: "5rem", b: "10rem" }}>
        <Text textSize="display2" m={{ b: "1rem" }}>
          Who's using Atomize?
        </Text>

        {/* <Text textSize="heading" textWeight="500" m={{ b: "0.5rem" }}>
          Installation
        </Text> */}
        <Text m={{ b: "4rem" }} textColor="medium">
          Check out these apps built using Paper. Send us a pull request to add
          your app to this list.
        </Text>
        <Row>
          <Col size={6}>
            <Div
              p={{ b: "113%" }}
              bg="gray400"
              bgImg="https://images.ctfassets.net/g4teg9603zq4/6cg0T1KtyYCcgDQHoltkBO/4eccd174c3af2a3d1f5ddb23d3d9334d/Italic_On-Figure_894.jpg"
              bgSize="cover"
            ></Div>
          </Col>
          <Col size={6}>
            <Div p={{ b: "113%" }} bg="gray400"></Div>
          </Col>
        </Row>
      </Div>
    </DocsWrapper>
  </Layout>
)

export default IntroDocs
