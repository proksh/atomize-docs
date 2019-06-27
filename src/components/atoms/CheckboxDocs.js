import React from "react"
import { Div, Text, Tag, Checkbox, Label } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"

const checkboxDocs1 = `// Basic Checkboxes
import { Checkbox, Label } from "react-atomize";

const BasicCheckboxes = () => {
  return (
    <>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Checkbox /> Normal Checkbox
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Checkbox disabled /> Disabled
        </Label>
        <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
            <Checkbox undetermine /> Undetermine
        </Label>
    </>
  );
}
`

const checkboxDocs2 = `// Managing through State
import { Checkbox, Label } from "react-atomize";

class ManagingCheckboxState extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            checkedManagingWithState: false
        };
    
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(e) {
        this.setState({
          checkedManagingWithState: e.target.checked
        });
    }

    render() {
        const { checkedManagingWithState } = this.state;

        return (
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Checkbox
                    onChange={this.toggleState}
                    checked={checkedManagingWithState}
                />
                Managing With State
            </Label>
        );
    }
}`

const checkboxDocs3 = `// Changing Checkbox Style
import { Checkbox, Label } from "react-atomize";

class StylingCheckbox extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            recieveNotification: false,
            rememberMe: true
        };
    }

    render() {
        const { recieveNotification, rememberMe } = this.state;

        return (
            <>
                <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                    <Checkbox
                    onChange={e =>
                        this.setState({ recieveNotification: e.target.checked })
                    }
                    checked={recieveNotification}
                    inactiveColor="success400"
                    activeColor="success700"
                    size="24px"
                    />
                    Get Notification on Email
                </Label>
                <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                    <Checkbox
                    onChange={e => this.setState({ rememberMe: e.target.checked })}
                    checked={rememberMe}
                    inactiveColor="success400"
                    activeColor="success700"
                    size="24px"
                    />
                    Remember Me
                </Label>
            </>
        );
    }
}`

const checkboxDocs4 = `// Loading Checkboxes
import { Checkbox, Label } from "react-atomize";

const LoadingCheckbox = () => {
  return (
    <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
        <Checkbox isLoading />
        Loading Checkbox
    </Label>
  );
}`

class CheckboxDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: checkboxDocs1,
      checkedManagingWithState: false,
      recieveNotification: false,
      rememberMe: true,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
    this.toggleState = this.toggleState.bind(this)
  }

  toggleState(e) {
    this.setState({
      checkedManagingWithState: e.target.checked,
    })
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const {
      selectedCode,
      checkedManagingWithState,
      recieveNotification,
      rememberMe,
    } = this.state

    return (
      <>
        <InfoCodeRow id="checkboxDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Checkbox
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            To make the area clickable for <Tag>{"<Checkbox />"}</Tag> changes,
            the area is wrapped inside
            <Tag>{"<Label />"}</Tag>.
          </Text>
          <Div pos="relative" m={{ b: "1rem" }} m={{ b: "4rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={checkboxDocs1}
              selectedValue={selectedCode}
            />
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Checkbox /> Normal Checkbox
            </Label>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Checkbox disabled /> Disabled
            </Label>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Checkbox undetermine /> Undetermine
            </Label>
          </Div>

          <Div m={{ b: "3rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={checkboxDocs2}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              You should manage the checked states with react states.
            </Text>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Checkbox
                onChange={this.toggleState}
                checked={checkedManagingWithState}
              />{" "}
              Managing With State
            </Label>
          </Div>

          <Div m={{ b: "4rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={checkboxDocs3}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              You can also change the <Tag>{"size"}</Tag>,{" "}
              <Tag>{"inactiveColor"}</Tag> & <Tag>{"activeColor"}</Tag> of the
              Checkbox.
            </Text>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Checkbox
                onChange={e =>
                  this.setState({ recieveNotification: e.target.checked })
                }
                checked={recieveNotification}
                inactiveColor="success400"
                activeColor="success700"
                size="24px"
              />
              Get Notification on Email
            </Label>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Checkbox
                onChange={e => this.setState({ rememberMe: e.target.checked })}
                checked={rememberMe}
                inactiveColor="success400"
                activeColor="success700"
                size="24px"
              />
              Remember Me
            </Label>
          </Div>
          <Div m={{ b: "3rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={checkboxDocs4}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              <Tag>{"isLoading"}</Tag> can be passed if the value of checkbox is
              loading.
            </Text>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Checkbox isLoading />
              Loading Checkbox
            </Label>
          </Div>
        </InfoCodeRow>
      </>
    )
  }
}

export default CheckboxDocs
