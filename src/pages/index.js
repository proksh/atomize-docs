import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/common/header"
import HeroSection from "../components/homepage/HeroSection"
import Features from "../components/homepage/Features"
import Craft from "../components/homepage/Craft"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <HeroSection />
    <Features />
    <Craft />
  </Layout>
)

export default IndexPage
