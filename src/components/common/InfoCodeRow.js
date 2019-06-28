import React from "react"
import styled from "styled-components"

import Highlight, { defaultProps } from "prism-react-renderer"
import { Div, Button } from "react-atomize"
import codeTheme from "../../components/common/codeTheme"

class InfoCodeRow extends React.Component {
  copyUrlToClipboard = code => {
    const el = document.createElement("textarea")
    el.value = code
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }

    window.alert("Url Copied")
  }

  render() {
    const { children, code, pt, pb, border, id } = this.props

    return (
      <Div
        id={id}
        d="flex"
        flexWrap="no-wrap"
        flexDir={{ xs: "column", lg: "row" }}
      >
        <Div
          minW={{ xs: "100%", md: "37rem" }}
          w={{ xs: "100%", md: "37rem" }}
          p={{ x: { xs: "2rem", lg: "4rem" } }}
          overflow="scroll"
        >
          <Div
            p={{
              t: { xs: "4rem", lg: pt },
              b: { xs: "4rem", lg: pb },
            }}
            border={border && { b: "1px solid" }}
            borderColor="gray300"
            h="100%"
          >
            {children}
          </Div>
        </Div>
        <Div
          flexGrow="1"
          bg="gray200"
          style={{ overflowX: "scroll", overflowY: "visible" }}
        >
          <Div
            pos="relative"
            p={{
              x: { xs: "1rem", lg: "2rem" },
              t: { xs: "2rem", lg: pt },
              b: { xs: "2rem", lg: "4rem" },
            }}
          >
            {code && (
              <Button
                h="2rem"
                bg="gray300"
                rounded="lg"
                border="1px solid"
                borderColor="gray400"
                textColor="medium"
                textSize="caption"
                m={{ l: "1rem", b: "0.5rem" }}
                onClick={() => this.copyUrlToClipboard(code)}
              >
                Copy Code
              </Button>
            )}
            {code && (
              <Highlight
                {...defaultProps}
                theme={codeTheme}
                code={code}
                language="jsx"
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
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
            )}
          </Div>
        </Div>
      </Div>
    )
  }
}

export default InfoCodeRow

InfoCodeRow.defaultProps = {
  pt: "4rem",
  pb: "4rem",
  border: true,
}
