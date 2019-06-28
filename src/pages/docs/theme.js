import React from "react"

import AvailableColors from "../../components/theme-setup/AvailableColors"
import AddEditColors from "../../components/theme-setup/AddEditColors"
import ColumnCount from "../../components/theme-setup/ColumnCount"
import ContainerGutterWidth from "../../components/theme-setup/ContainerGutterWidth"
import Shadows from "../../components/theme-setup/Shadows"
import BorderRadius from "../../components/theme-setup/BorderRadius"
import FontSize from "../../components/theme-setup/FontSize"
import FontFamily from "../../components/theme-setup/FontFamily"
import Transition from "../../components/theme-setup/Transition"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DocsWrapper from "../../components/common/DocsWrapper"

const Molecules = () => (
  <Layout>
    <SEO title="Home" />
    <DocsWrapper>
      <AvailableColors />
      <AddEditColors />
      <ColumnCount />
      <ContainerGutterWidth />
      <Shadows />
      <BorderRadius />
      <FontSize />
      <FontFamily />
      <Transition />
    </DocsWrapper>
  </Layout>
)

export default Molecules
