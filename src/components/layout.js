/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./font.css"

import Header from "./common/header"
import { StyleReset, DefaultTheme, ThemeProvider } from "react-atomize"

const theme = {
  ...DefaultTheme,
  fontFamily: {
    ...DefaultTheme.fontFamily,
    secondary: '"jubilat", serif',
    code: "'Fira Mono','Roboto Mono', monospace",
  },
  grid: {
    ...DefaultTheme.grid,
    containerMaxWidth: {
      ...DefaultTheme.grid.containerMaxWidth,
      xl: "1184px",
    },
  },
  textSize: {
    ...DefaultTheme.textSize,
    size: {
      ...DefaultTheme.textSize.size,
      display3: "50px",
    },
    height: {
      ...DefaultTheme.textSize.height,
      display3: "56px",
    },
  },
  colors: {
    ...DefaultTheme.colors,
    brandgray: "#F7F5F4",
  },
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <StyleReset />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <main>{children}</main>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
