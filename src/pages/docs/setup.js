import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { Text, Div, Anchor, Icon } from "react-atomize"
import DocsWrapper from "../../components/common/DocsWrapper"
import Highlight, { defaultProps } from "prism-react-renderer"

import codeTheme from "../../components/common/codeTheme"

const styleResetCode = `import React from 'react';
import { StyleReset } from 'react-atomize';
import App from './src/App';

export default function Main() {
  return (
    <>
      <StyleReset />
      <App />
    </>
  );
}`

const usageCode = `import React from 'react';
import { StyleReset } from 'react-atomize';
import App from './src/App';

export default function Main() {
  return (
    <>
      <StyleReset />
      <App />
    </>
  );
}`

const customizationCode = `import React from 'react';
import { ThemeProvider, DefaultTheme, StyleReset } from 'react-atomize';
import App from './src/App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
  );
}`

const Setup = () => (
  <Layout>
    <SEO title="Home" />
    <DocsWrapper>
      <Div p={{ x: { xs: "2rem", md: "4rem" }, t: "5rem", b: "10rem" }}>
        <Text textSize="display2" m={{ b: "4rem" }}>
          Getting Started
        </Text>

        {/* Installation */}
        <Text textSize="heading" textWeight="500" m={{ b: "0.5rem" }}>
          Installation
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Open a Terminal in your project's folder and run,
        </Text>
        <Div
          m={{ b: "4rem" }}
          p={{ x: "0.5rem" }}
          bg="gray200"
          rounded="lg"
          overflow="hidden"
          textColor="medium"
          fontFamily="code"
        >
          <Highlight
            {...defaultProps}
            theme={codeTheme}
            code={`npm install atomize styled-components react-transition-group @callstack/react-theme-provider`}
            language="bash"
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

        {/* <Text m={{ b: "1rem" }} textColor="medium">
          In additional to this, you'll need to install{" "}
          <Anchor>styled-components</Anchor>,{" "}
          <Anchor>react-transition-group</Anchor> &{" "}
          <Anchor>@callstack/react-theme-provider</Anchor> to complete the
          installation.
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Then add StyleReset from atomize to the root component.
        </Text> */}
        {/* <Div
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
            code={styleResetCode}
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
        </Div> */}

        {/* Usage */}
        <Text textSize="heading" textWeight="500" m={{ b: "0.5rem" }}>
          Usage
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Include the StyleReset from atomize to your root component. If you
          have a vanilla React Native project, it's a good idea to add it in the
          component which is passed to AppRegistry.registerComponent. This will
          usually be in the index.js file. If you have an Expo project, you can
          do this inside the App.js file.
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Example:
        </Text>
        {/* <Div
          p="1rem"
          m={{ b: "4rem" }}
          rounded="md"
          bg="gray200"
          textColor="medium"
          fontFamily="code"
        >
          npm install atomize
        </Div> */}
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
            code={usageCode}
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

        {/* Customization */}
        <Text textSize="heading" textWeight="500" m={{ b: "0.5rem" }}>
          Customization
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          You can provide a custom theme to customize the colors, fonts etc.
          with the ThemeProvider component. Check the theme customization
          options in <Link to="/docs/theme">Theme Setup</Link>.
        </Text>
        <Text m={{ b: "1rem" }} textColor="medium">
          Example:
        </Text>
        <Div
          m={{ b: "1rem" }}
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
            code={customizationCode}
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

export default Setup
