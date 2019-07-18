import React from "react"
import { Link } from "gatsby"

import { Div, Text, Button } from "react-atomize"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: page not found" />
    <Div
      minH="100vh"
      w="100vw"
      d="flex"
      align="center"
      justify="center"
      flexDir="column"
    >
      <Text tag="h2" textSize="display1" m={{ b: "0.5rem" }}>
        Not Found
      </Text>
      <Text m={{ b: "2rem" }}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
      <Link to="/">
        <Button bg="info700" hoverBg="info800">
          Go to Home
        </Button>
      </Link>
    </Div>
  </Layout>
)

export default NotFoundPage
