import React from "react"
import ScrollToDocs from "../../../components/functions/ScrollToDocs"
import CurrentDeviceDocs from "../../../components/functions/CurrentDeviceDocs"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import DocsWrapper from "../../../components/common/DocsWrapper"

const Functions = () => (
  <Layout>
    <SEO
      title="Functions"
      description="functions present in atomize design system"
    />
    <DocsWrapper>
      <ScrollToDocs />
      <CurrentDeviceDocs />
    </DocsWrapper>
  </Layout>
)

export default Functions
