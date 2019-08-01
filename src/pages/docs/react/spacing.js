import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Text, Button, Div, Anchor, Icon } from "atomize"
import DocsWrapper from "../../../components/common/DocsWrapper"
import Highlight, { defaultProps } from "prism-react-renderer"

import codeTheme from "../../../components/common/codeTheme"

const responsiveCode = `// Padding
p={{ xs: '1rem', md: '4rem' }}

// Padding Directional
p={{ x: { xs: '1rem', md: '4rem' }, y: { xs: '2rem', md: '0rem' }}}

// Margin
m={{ xs: '1rem', md: '4rem' }}

// Margin Directional
m={{ x: { xs: '1rem', md: '4rem' }, y: { xs: '2rem', md: '0rem' }}}

// Height
h={{ xs: '1rem', md: '4rem' }}

// Width
h={{ xs: '1rem', md: '4rem' }}`

const SpacingDocs = () => (
  <Layout>
    <SEO
      title="Spacing"
      description="Guide to give spacing in Atomize design system."
    />
    <DocsWrapper>
      <Div p={{ x: { xs: "1.5rem", md: "4rem" }, t: "5rem", b: "10rem" }}>
        <Text textSize="display2" m={{ b: "1rem" }}>
          Spacing.
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          It is recommended to use <b>8 point grid</b> in Atomize Design System.
          To Quantize the spacing, it is recommended to use spacing values in
          rem. html has default font-size of 16 points, and therefore, using{" "}
          <b>
            0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem, etc.
          </b>{" "}
          will quantize the value and follow 8 point grid.
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Example -
        </Text>
        <Div
          m={{ b: "4rem" }}
          p="0.5rem"
          bg="gray200"
          rounded="lg"
          overflow="hidden"
          textColor="medium"
          fontFamily="code"
        >
          <Highlight
            {...defaultProps}
            theme={codeTheme}
            code={responsiveCode}
            language="jsx"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </Div>
      </Div>
    </DocsWrapper>
  </Layout>
)

export default SpacingDocs
