import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import { Text, Div } from "atomize"
import DocsWrapper from "../../../components/common/DocsWrapper"
import Highlight, { defaultProps } from "prism-react-renderer"

import codeTheme from "../../../components/common/codeTheme"

const responsiveCode = `{
    xs: { 'value for mobile devices & larger' },
    sm: { 'value for larger mobile & larger' },
    md: { 'value for tablets & larger' },
    lg: { 'value for small desktop & larger' },
    xl: { 'value for large desktop' }
}`

const exampleCode = `// Padding
p={{ xs: '1rem', md: '4rem' }}

// Padding Top
p={{ t: {xs: '1rem', md: '4rem' }}}

// border
border={{ xs: '1px solid', lg: '2px dashed' }}

// Border Top & Bottom
border={
    t: { xs: '1px solid', lg: '2px dashed' }
    b: { xs: '1px solid', lg: '2px dashed' }
}`

const ResponsiveDocs = () => (
  <Layout>
    <SEO
      title="Responsive"
      description="Guide to give responsive props in Atomize design system."
    />
    <DocsWrapper>
      <Div p={{ x: { xs: "1.5rem", md: "4rem" }, t: "5rem", b: "10rem" }}>
        <Text textSize="display2" m={{ b: "1rem" }}>
          Responsive.
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Atomize design system supports responsiveness for most of the props by
          just passing an array. Examples for a particular prop will be given in
          its detail.
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Array given to the end prop is like -
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
        <Text m={{ b: "1rem" }} textColor="medium">
          Examples -
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
            code={exampleCode}
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

export default ResponsiveDocs
