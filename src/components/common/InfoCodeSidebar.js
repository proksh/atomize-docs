import React from "react"

import Highlight, { defaultProps } from "prism-react-renderer"
import { Div, Button, Notification, Icon } from "atomize"
import codeTheme from "../../components/common/codeTheme"

class InfoCodeSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      copied: false,
    }
  }
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

    // window.alert("Url Copied")

    this.setState({ copied: true })
  }

  render() {
    const { copied } = this.state
    const { children, code, border, id } = this.props

    return (
      <Div id={id} d="flex" flexWrap="no-wrap" flexDir="column">
        <Notification
          textColor="success800"
          isOpen={copied}
          bg="success300"
          rounded="xl"
          prefix={
            <Icon
              name="Success"
              color="success800"
              m={{ r: "0.5rem" }}
              size="20px"
            />
          }
          onClose={() => this.setState({ copied: false })}
        >
          Copied Successfully
        </Notification>
        <Div minW="100%" w="100%" overflow="scroll">
          <Div p={{ y: "2rem" }} h="100%">
            {children}
          </Div>
        </Div>
        <Div
          flexGrow="1"
          bg="gray200"
          style={{ overflowX: "scroll", overflowY: "visible" }}
          m={{ x: "-2rem" }}
        >
          <Div
            pos="relative"
            p={{
              x: "1rem",
              t: "1rem",
              b: "1rem",
            }}
          >
            {/* {code && (
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
            )} */}
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

export default InfoCodeSidebar
