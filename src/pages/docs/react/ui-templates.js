import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Text, Div, Row, Col, Icon, Anchor, Button } from "atomize"
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
          UI tempalates coming soon
        </Text>
        <Text textSize="subheader" m={{ b: "2rem" }} textColor="medium">
          Official UI templates build on Atomize React will be released very
          soon.
        </Text>
        <Anchor href="https://forms.gle/MdjR9MV1Tq1BekvRA" target="_blank">
          <Button
            rounded="circle"
            shadow="1"
            hoverShadow="4"
            w="12rem"
            h="3rem"
            p={{ x: "1.5rem" }}
            justify="space-between"
            suffix={<Icon name="LongRight" size="20px" color="white" />}
          >
            Get notified
          </Button>
        </Anchor>
        {/* <Text textSize="display2" m={{ b: "1rem" }}>
          UI Templates
        </Text>
        <Text m={{ b: "4rem" }} textColor="medium">
          To sell your own template at atomize or to recieve support for current
          one, you{" "}
          <Anchor href="mailto:prokshh@gmail.com"> can reach out here.</Anchor>
        </Text>
        <Row>
          <Col size={{ xs: 12, md: 6 }}>
            <Anchor
              href="https://atomizecode.com/blogpreview/home"
              target="_blank"
            >
              <Div
                m={{ b: "1rem" }}
                p={{ b: "70%" }}
                rounded="lg"
                shadow="2"
                hoverShadow="4"
                cursor="pointer"
                bg="gray200"
                bgImg={template}
                bgSize="cover"
                border="1px solid"
                borderColor="gray200"
                transition
              ></Div>
            </Anchor>
            <Div d="flex" justify="space-between" align="center">
              <Text textSize="title" textAlign="center">
                Blog Template
              </Text>
              <Div d="flex">
                <Anchor
                  href="https://atomizecode.com/blogpreview/home"
                  target="_blank"
                >
                  <Button
                    m={{ r: "1rem" }}
                    bg="white"
                    border="1px solid"
                    borderColor="gray400"
                    textColor="black"
                  >
                    Preview
                  </Button>
                </Anchor>
                <Button bg="info700">Buy template</Button>
              </Div>
            </Div>
          </Col>
        </Row> */}
      </Div>
    </DocsWrapper>
  </Layout>
)

export default UITemplates
