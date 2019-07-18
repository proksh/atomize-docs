import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Text, Button, Div, Anchor, Icon } from "react-atomize"
import DocsWrapper from "../../../components/common/DocsWrapper"

const IntroDocs = () => (
  <Layout>
    <SEO
      title="Introduction"
      description="Introduction to Atomize design system - Advance design system for React JS."
    />
    <DocsWrapper>
      <Div p={{ x: { xs: "1.5rem", md: "4rem" }, t: "5rem", b: "10rem" }}>
        <Text tag="h2" textWeight="400" textSize="display2" m={{ b: "1rem" }}>
          Advance Design System for React JS.
        </Text>

        {/* <Text textSize="heading" textWeight="500" m={{ b: "0.5rem" }}>
          Installation
        </Text> */}
        <Text m={{ b: "1rem" }} textColor="medium">
          Atomize is a collection of customizable and production-ready
          components for React JS.
        </Text>
        <Anchor
          href="https://codesandbox.io/embed/mystifying-lichterman-bv5to"
          target="_blank"
          textDecor="underline"
          m={{ b: "4rem" }}
          d="block"
        >
          Try Demo on Sandbox
        </Anchor>
        <Div d="flex" m={{ b: "2rem" }}>
          <Link to="/docs/react/setup">
            <Button bg="info700" w="7rem" m={{ r: "1rem" }}>
              Get Started
            </Button>
          </Link>
          <Button
            bg="transparent"
            border="1px solid"
            borderColor="gray400"
            textColor="medium"
            w="7rem"
          >
            Github
          </Button>
        </Div>
        <Div d="flex" bg="info200" p="1rem" rounded="md">
          <Icon
            name="InfoSolid"
            size="16px"
            m={{ r: "0.5rem", t: "0.25rem" }}
            color="info700"
          />
          <Text>You will need React v16.3 or above for atomize.</Text>
        </Div>
      </Div>
    </DocsWrapper>
  </Layout>
)

export default IntroDocs
