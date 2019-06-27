import React from "react"
import {
  Div,
  Text,
  Tag,
  Button,
  Image,
  Icon,
  Anchor,
  Collapse,
} from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"

const collapseDocsCode1 = `// Basic Links
import { Div, Tag, Anchor, Icon } from "react-atomize";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          showCollapse: false
        };
    }

    render() {
        const { selectedCode, showCollapse } = this.state;

        return (
            <>
                <Button
                    onClick={() => this.setState({ showCollapse: !showCollapse })}
                    m={{ b: "1rem" }}
                >
                    Toggle Collapse
                </Button>
                <Collapse isOpen={showCollapse}>
                    <Div
                    bg="gray100"
                    border="1px solid"
                    borderColor="gray400"
                    rounded="lg"
                    >
                    {["This", "section", "is", "inside", "collapse"].map(
                        (name, index) => (
                        <Div
                            p={{ x: "1rem", y: "0.75rem" }}
                            border={{ b: index != 4 && "1px solid" }}
                            borderColor="gray400"
                        >
                            {name}
                        </Div>
                        )
                    )}
                    </Div>
                </Collapse>
            </>
        );
    }
}`

class AnchorDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: collapseDocsCode1,
      showCollapse: false,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const { selectedCode, showCollapse } = this.state

    return (
      <>
        <InfoCodeRow id="collapseDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Collapse
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            <Tag>{"<Collapse />"}</Tag> can be used when you need to show/hide
            some element. <Tag>{"isOpen"}</Tag> props define the state of the
            component.
          </Text>
          <Div pos="relative" m={{ b: "4rem" }}>
            <Button
              onClick={() => this.setState({ showCollapse: !showCollapse })}
              m={{ b: "1rem" }}
            >
              Toggle Collapse
            </Button>
            <Collapse isOpen={showCollapse}>
              <Div
                bg="gray100"
                border="1px solid"
                borderColor="gray400"
                rounded="lg"
              >
                {["This", "section", "is", "inside", "collapse"].map(
                  (name, index) => (
                    <Div
                      p={{ x: "1rem", y: "0.75rem" }}
                      border={{ b: index != 4 && "1px solid" }}
                      borderColor="gray400"
                    >
                      {name}
                    </Div>
                  )
                )}
              </Div>
            </Collapse>
          </Div>
        </InfoCodeRow>
      </>
    )
  }
}

export default AnchorDocs
