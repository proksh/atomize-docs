import React from "react"
import { Link } from "gatsby"

import ContainerDocs from "../../components/grid-components/ContainerDocs"
import RowColDocs from "../../components/grid-components/RowColDocs"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DocsWrapper from "../../components/common/DocsWrapper"

const Grid = () => (
  <Layout>
    <SEO title="Home" />
    <DocsWrapper>
      <ContainerDocs />
      <RowColDocs />
    </DocsWrapper>
  </Layout>
)

export default Grid
