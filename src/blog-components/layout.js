/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ThemeProvider, DefaultTheme, Div } from "atomize"
import Header from "./common/Header"
import Footer from "./common/Footer"
import "../fonts/font.css"

const theme = {
  ...DefaultTheme,
  fontFamily: {
    ...DefaultTheme.fontFamily,
    primary:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    secondary: "headings",
  },
  textSize: {
    ...DefaultTheme.textSize,
    size: {
      ...DefaultTheme.textSize.size,
      tiny: "8px",
      caption: "10px",
      body: "13px",
      paragraph: "13px",
      subheader: "16px",
      title: "22px",
      heading: "24px",
      heading2: "28px",
      display1: "36px",
      display2: "54px",
      display3: "64px",
      display4: "72px",
    },
    height: {
      ...DefaultTheme.textSize.height,
      tiny: "11px",
      caption: "16px",
      body: "17px",
      paragraph: "20px",
      subheader: "24px",
      title: "32px",
      heading: "32px",
      heading2: "36px",
      display1: "44px",
      display2: "72px",
      display3: "87px",
      display4: "98px",
    },
  },
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Div tag="main" w="100vw" overflow="hidden">
        {children}
      </Div>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
