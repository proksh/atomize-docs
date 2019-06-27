import React from "react"
import { Div, Text, Tag, Radiobox, Label } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"

const RadioboxDocs1 = `// Basic Radioboxes
import { Radiobox, Label } from "react-atomize";

const BasicRadioboxes = () => {
  return (
    <>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Radiobox /> Normal Radiobox
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Radiobox disabled /> Disabled
        </Label>
    </>
  );
}
`

const RadioboxDocs2 = `// Managing through Name
import { Radiobox, Label, Div } from "react-atomize";

class ManagingRadioboxWithName extends React.Component {
    render() {
        return (
            <Div d="flex" m={{ b: "2rem" }}>
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "1rem" }}
              >
                <Radiobox name="gender" default />
                Male
              </Label>
              <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Radiobox name="gender" />
                Female
              </Label>
            </Div>
        );
    }
}`

const RadioboxDocs3 = `// Managing through State
import { Radiobox, Label, Div } from "react-atomize";

class ManagingRadioboxWithState extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            selectedCountValue: 1
        };

        this.toggleSelectedCount = this.toggleSelectedCount.bind(this);
    }

    render() {
        const { selectedCountValue} = this.state;

        return (
            <Div d="flex">
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => this.toggleSelectedCount(1)}
                  name="count"
                  value={1}
                  selectedValue={selectedCountValue}
                />
                1
              </Label>
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => this.toggleSelectedCount(2)}
                  name="count"
                  value={2}
                  selectedValue={selectedCountValue}
                />
                2
              </Label>
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => this.toggleSelectedCount(3)}
                  name="count"
                  value={3}
                  selectedValue={selectedCountValue}
                />
                3
              </Label>
              <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Radiobox
                  onChange={() => this.toggleSelectedCount(4)}
                  name="count"
                  value={4}
                  selectedValue={selectedCountValue}
                />
                4
              </Label>
            </Div>
        );
    }
}`

const RadioboxDocs4 = `// Styling Radiobox
import { Radiobox, Label } from "react-atomize";

const LoadingRadiobox = () => {
  return (
    <>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Radiobox
                name="yes/no"
                inactiveColor="danger400"
                activeColor="danger700"
                size="22px"
            />
            Yes
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Radiobox
                name="yes/no"
                inactiveColor="danger400"
                activeColor="danger700"
                size="22px"
            />
            No
        </Label>
    </>
  );
}`

const RadioboxDocs5 = `// Loading Radioboxes
import { Radiobox, Label } from "react-atomize";

const LoadingRadiobox = () => {
  return (
    <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
        <Radiobox isLoading />
        Loading Radiobox
    </Label>
  );
}`

class RadioboxDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: RadioboxDocs1,
      selectedCountValue: 1,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
    this.toggleSelectedCount = this.toggleSelectedCount.bind(this)
  }

  toggleSelectedCount(value) {
    this.setState({
      selectedCountValue: value,
    })
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const { selectedCode, selectedCountValue } = this.state

    return (
      <>
        <InfoCodeRow id="radioboxDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Radiobox
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            To make the area clickable for <Tag>{"<Radiobox />"}</Tag> changes,
            the area is wrapped inside
            <Tag>{"<Label />"}</Tag>.
          </Text>
          <Div pos="relative" m={{ b: "1rem" }} m={{ b: "4rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={RadioboxDocs1}
              selectedValue={selectedCode}
            />
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Radiobox /> Normal Radiobox
            </Label>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Radiobox disabled /> Disabled
            </Label>
          </Div>

          <Div m={{ b: "3rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={RadioboxDocs2}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              You should use same <Tag>{"name"}</Tag> for the the group of
              radiobox.
            </Text>
            <Div d="flex" m={{ b: "2rem" }}>
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "1rem" }}
              >
                <Radiobox name="gender" default />
                Male
              </Label>
              <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Radiobox name="gender" />
                Female
              </Label>
            </Div>
          </Div>
          <Div m={{ b: "3rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={RadioboxDocs3}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              Or you can manage radios with react States.
            </Text>
            <Div d="flex">
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => this.toggleSelectedCount(1)}
                  name="count"
                  value={1}
                  selectedValue={selectedCountValue}
                />
                1
              </Label>
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => this.toggleSelectedCount(2)}
                  name="count"
                  value={2}
                  selectedValue={selectedCountValue}
                />
                2
              </Label>
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => this.toggleSelectedCount(3)}
                  name="count"
                  value={3}
                  selectedValue={selectedCountValue}
                />
                3
              </Label>
              <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Radiobox
                  onChange={() => this.toggleSelectedCount(4)}
                  name="count"
                  value={4}
                  selectedValue={selectedCountValue}
                />
                4
              </Label>
            </Div>
          </Div>

          <Div m={{ b: "4rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={RadioboxDocs4}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              You can also change the <Tag>{"size"}</Tag>,{" "}
              <Tag>{"inactiveColor"}</Tag> & <Tag>{"activeColor"}</Tag> of the
              Radiobox.
            </Text>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Radiobox
                name="yes/no"
                inactiveColor="danger400"
                activeColor="danger700"
                size="22px"
              />
              Yes
            </Label>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Radiobox
                name="yes/no"
                inactiveColor="danger400"
                activeColor="danger700"
                size="22px"
              />
              No
            </Label>
          </Div>
          <Div m={{ b: "3rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={RadioboxDocs5}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              <Tag>{"isLoading"}</Tag> can be passed if the value of Radiobox is
              loading.
            </Text>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Radiobox isLoading />
              Loading Radiobox
            </Label>
          </Div>
        </InfoCodeRow>
      </>
    )
  }
}

export default RadioboxDocs
