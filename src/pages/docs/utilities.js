import React from "react"

import Responsive from "../../components/utilities/Responsive"
import Padding from "../../components/utilities/Padding"
import Margin from "../../components/utilities/Margin"
import Background from "../../components/utilities/Background"
import TextProps from "../../components/utilities/TextProps"
import FontFamily from "../../components/utilities/FontFamily"
import HeightWidth from "../../components/utilities/HeightWidth"
import BorderRadius from "../../components/utilities/BorderRadius"
import Border from "../../components/utilities/Border"
import Display from "../../components/utilities/Display"
import Shadows from "../../components/utilities/Shadows"
import Position from "../../components/utilities/Position"
import Flex from "../../components/utilities/Flex"
import Cursor from "../../components/utilities/Cursor"
import Transform from "../../components/utilities/Transform"
import Transition from "../../components/utilities/Transition"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DocsWrapper from "../../components/common/DocsWrapper"

const Utilities = () => (
  <Layout>
    <SEO title="Home" />
    <DocsWrapper>
      <Responsive />
      <Padding />
      <Margin />
      <Background />
      <TextProps />
      <FontFamily />
      <HeightWidth />
      <BorderRadius />
      <Border />
      <Display />
      <Shadows />
      <Position />
      <Flex />
      <Cursor />
      <Transform />
      <Transition />
    </DocsWrapper>
  </Layout>
)

export default Utilities
