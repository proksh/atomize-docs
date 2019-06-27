import React from "react"
import ScrollToDocs from "../../components/functions/ScrollToDocs"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DocsWrapper from "../../components/common/DocsWrapper"

const Functions = () => (
  <Layout>
    <SEO title="Home" />
    <DocsWrapper>
      <ScrollToDocs />
    </DocsWrapper>
  </Layout>
)

export default Functions
