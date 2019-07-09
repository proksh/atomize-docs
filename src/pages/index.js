import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/common/header"
import HeroSection from "../components/homepage/HeroSection"
import Features from "../components/homepage/Features"
import Craft from "../components/homepage/Craft"
import DesignDevelopment from "../components/homepage/DesignDevelopment"
import GetStartedBanner from "../components/homepage/GetStartedBanner"
import Footer from "../components/homepage/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Atomize Design System" />
    <Header />
    <HeroSection />
    <Features />
    <Craft />
    <DesignDevelopment />
    <GetStartedBanner />
    <Footer />
  </Layout>
)

export default IndexPage
