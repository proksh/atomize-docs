import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./font.css"

import { StyleReset, DefaultTheme, ThemeProvider, Div } from "react-atomize"

const theme = {
  ...DefaultTheme,
  fontFamily: {
    ...DefaultTheme.fontFamily,
    primary:
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
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
      display3: "52px",
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
        <Div tag="main" w="100vw" overflow="hidden">
          {children}
        </Div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
