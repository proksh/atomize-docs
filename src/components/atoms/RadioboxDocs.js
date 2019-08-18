import React from "react"
import { Div, Text, Tag, Radiobox, Label } from "atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

// const RadioboxDocs1 = `// Basic Radioboxes
// import { Radiobox, Label } from "atomize";

// const BasicRadioboxes = () => {
//   return (
//     <>
//         <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
//             <Radiobox /> Normal Radiobox
//         </Label>
//         <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
//             <Radiobox disabled /> Disabled
//         </Label>
//     </>
//   );
// }
// `

// const RadioboxDocs2 = `// Managing through Name
// import { Radiobox, Label, Div } from "atomize";

// class ManagingRadioboxWithName extends React.Component {
//     render() {
//         return (
//             <Div d="flex" m={{ b: "2rem" }}>
//               <Label
//                 align="center"
//                 textWeight="600"
//                 m={{ b: "0.5rem", r: "1rem" }}
//               >
//                 <Radiobox name="gender" default />
//                 Male
//               </Label>
//               <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
//                 <Radiobox name="gender" />
//                 Female
//               </Label>
//             </Div>
//         );
//     }
// }`

const RadioboxDocs3 = `// Managing through State
import { Radiobox, Label, Div } from "atomize";

class ManagingRadioboxWithState extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            selectedCountValue: 1
        };

        this.toggleSelectedCount = this.toggleSelectedCount.bind(this);
    }

    toggleSelectedCount(value) {
      this.setState({
        selectedCountValue: value,
      })
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
                  checked={ selectedCountValue === 1 }
                  name="count"
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
                  checked={ selectedCountValue === 2 }
                  name="count"
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
                  checked={ selectedCountValue === 3 }
                  name="count"
                />
                3
              </Label>
              <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Radiobox
                  onChange={() => this.toggleSelectedCount(4)}
                  checked={ selectedCountValue === 4 }
                  name="count"
                />
                4
              </Label>
            </Div>
        );
    }
}`

const RadioboxDocs4 = `// Styling Radiobox
import { Radiobox, Label } from "atomize";

class CustomRaios extends React.Component {
  constructor(props) {
      super(props);
  
      this.state = {
          selectedCountValue: "yes"
      };

      this.toggleSelectedCount = this.toggleSelectedCount.bind(this);
  }

  toggleSelectedCount(value) {
    this.setState({
      selectedCountValue: value,
    })
  }

  render() {
      const { selectedCountValue} = this.state;

      return (
        <>
          <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Radiobox
                onChange={() => this.toggleSelectedCount("yes")}
                checked={ selectedCountValue === "yes" }
                inactiveColor="danger400"
                activeColor="danger700"
                size="22px"
              />
              Yes
          </Label>
          <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Radiobox
                onChange={() => this.toggleSelectedCount("no")}
                checked={ selectedCountValue === "no" }
                inactiveColor="danger400"
                activeColor="danger700"
                size="22px"
              />
              No
          </Label>
        </>
      );
  }
}`

const RadioboxDocs5 = `// Loading Radioboxes
import { Radiobox, Label } from "atomize";

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
      selectedCode: RadioboxDocs3,
      selectedCountValue: 1,
      selectedCountValue2: "yes",
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
    const { selectedCode, selectedCountValue, selectedCountValue2 } = this.state

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
          {/* <Div pos="relative" m={{ b: "1rem" }} m={{ b: "4rem" }}>
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
          </Div> */}

          {/* <Div m={{ b: "3rem" }} pos="relative">
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
          </Div> */}
          <Div m={{ b: "3rem" }} pos="relative">
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={RadioboxDocs3}
              selectedValue={selectedCode}
            />
            <Text textColor="medium" textSize="body" m={{ b: "1rem" }}>
              Manage radios with react States.
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
                  checked={selectedCountValue === 1}
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
                  checked={selectedCountValue === 2}
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
                  checked={selectedCountValue === 3}
                />
                3
              </Label>
              <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Radiobox
                  onChange={() => this.toggleSelectedCount(4)}
                  name="count"
                  checked={selectedCountValue === 4}
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
                onChange={() => this.setState({ selectedCountValue2: "yes" })}
                checked={selectedCountValue2 === "yes"}
                inactiveColor="danger400"
                activeColor="danger700"
                size="22px"
              />
              Yes
            </Label>
            <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
              <Radiobox
                onChange={() => this.setState({ selectedCountValue2: "no" })}
                checked={selectedCountValue2 === "no"}
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

          <AvailableProps
            defaultProps={{
              isLoading: "false",
              disabled: "false",
              cursor: "pointer",
              m: '{ r: "0.5rem" }',
              color: "black",
              size: "20px",
              inactiveColor: "gray500",
              activeColor: "info700",
            }}
            available={[
              "isLoading",
              "disabled",
              "activeColor",
              "inactiveColor",
              "size",
              "p",
              "m",
              "d",
              "position",
              "top",
              "left",
              "right",
              "bottom",
              "transform",
              "transition",
              "cursor",
            ]}
          />
        </InfoCodeRow>
      </>
    )
  }
}

export default RadioboxDocs
