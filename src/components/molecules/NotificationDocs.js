import React from "react"
import {
  Div,
  Text,
  Tag,
  Button,
  Modal,
  Icon,
  Notification,
  DropdownMenu,
  Anchor,
} from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"

const notificationDocsCode1 = `// Auto Closed Notifiation
import { Div, Button, Notification } from "react-atomize";

class MyNotifation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNotification: false
    };
  }

  render() {
    const { showNotification } = this.state;

    return (
      <>
        <Button
          bg="gray700"
          hoverBg="gray600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ showNotification: true })}
        >
          Show auto close notification
        </Button>
        <Notification
          isOpen={showNotification}
          onClose={() => this.setState({ showNotification: false })}
        >
          This notification is self closable
        </Notification>
      </>
    );
  }
}

export default MyNotifation;`

const notificationDocsCode2 = `// Closed by icon notification
import { Div, Button, Notification } from "react-atomize";

class MyNotifation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNotification: false
    };
  }

  render() {
    const { showNotification } = this.state;

    return (
      <>
        <Button
          bg="gray700"
          hoverBg="gray600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ closeButton: true })}
        >
          Show notification closed by icon 
        </Button>
        <Notification
          isOpen={closeButton}
          suffix={
            <Icon
              name="Cross"
              pos="absolute"
              top="1rem"
              right="0.5rem"
              color="white"
              size="18px"
              cursor="pointer"
              m={{ r: "0.5rem" }}
              onClick={() => this.setState({ closeButton: false })}
            />
          }
        >
          This notification will close by button
        </Notification>
      </>
    );
  }
}

export default MyNotifation;`

const notificationDocsCode3 = `// Dark Notifications
import { Div, Button, Notification, Icon } from "react-atomize";

class MyNotifation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      successDark: false,
      warningDark: false,
      infoDark: false,
      dangerDark: false,
    };
  }

  render() {
    const { successDark, warningDark, infoDark, dangerDark } = this.state;

    return (
      <Div d="flex">

        // Success
        <Button
          bg="success700"
          hoverBg="success600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ successDark: true })}
        >
          Success
        </Button>
        <Notification
          bg="success700"
          isOpen={successDark}
          onClose={() => this.setState({ successDark: false })}
          prefix={
            <Icon
              name="Success"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a success message
        </Notification>

        // Warning
        <Button
          bg="warning700"
          hoverBg="warning600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ warningDark: true })}
        >
          Warning
        </Button>
        <Notification
          bg="warning700"
          isOpen={warningDark}
          onClose={() => this.setState({ warningDark: false })}
          prefix={
            <Icon
              name="AlertSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a warning message
        </Notification>

        // Info
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ infoDark: true })}
        >
          Info
        </Button>
        <Notification
          bg="info700"
          isOpen={infoDark}
          onClose={() => this.setState({ infoDark: false })}
          prefix={
            <Icon
              name="InfoSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a info message
        </Notification>

        // Alert
        <Button
          bg="danger700"
          hoverBg="danger600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ dangerDark: true })}
        >
          Alert
        </Button>
        <Notification
          bg="danger700"
          isOpen={dangerDark}
          onClose={() => this.setState({ dangerDark: false })}
          prefix={
            <Icon
              name="CloseSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a alert message
        </Notification>
      </Div>
    );
  }
}

export default MyNotifation;`

const notificationDocsCode4 = `// Light Notifications
import { Div, Button, Notification, Icon } from "react-atomize";

class MyNotifation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      successLight: false,
      warningLight: false,
      infoLight: false,
      dangerLight: false,
    };
  }

  render() {
    const { successLight, warningLight, infoLight, dangerLight } = this.state;

    return (
      <Div d="flex">

        // Success
        <Button
          bg="success300"
          hoverBg="success400"
          textColor="success800"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ successLight: true })}
        >
          Success
        </Button>
        <Notification
          bg="success100"
          textColor="success800"
          isOpen={successLight}
          onClose={() => this.setState({ successLight: false })}
          prefix={
            <Icon
              name="Success"
              color="success800"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a success message
        </Notification>

        // Warning
        <Button
          bg="warning300"
          hoverBg="warning400"
          textColor="warning800"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ warningLight: true })}
        >
          Warning
        </Button>
        <Notification
          bg="warning100"
          textColor="warning800"
          isOpen={warningLight}
          onClose={() => this.setState({ warningLight: false })}
          prefix={
            <Icon
              name="Alert"
              color="warning800"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a warning message
        </Notification>

        // Info
        <Button
          bg="info300"
          hoverBg="info400"
          textColor="info800"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ infoLight: true })}
        >
          Info
        </Button>
        <Notification
          bg="info100"
          textColor="info800"
          isOpen={infoLight}
          onClose={() => this.setState({ infoLight: false })}
          prefix={
            <Icon
              name="Info"
              color="info800"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a info message
        </Notification>

        // Alert
        <Button
          bg="danger300"
          hoverBg="danger400"
          textColor="danger800"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ dangerLight: true })}
        >
          Alert
        </Button>
        <Notification
          bg="danger100"
          textColor="danger800"
          isOpen={dangerLight}
          onClose={() => this.setState({ dangerLight: false })}
          prefix={
            <Icon
              name="Close"
              color="danger800"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          This is a alert message
        </Notification>
      </Div>
    );
  }
}

export default MyNotifation;`

class NotificationDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: notificationDocsCode1,
      autoClose: false,
      closeButton: false,
      successDark: false,
      warningDark: false,
      infoDark: false,
      dangerDark: false,
      successLight: false,
      warningLight: false,
      infoLight: false,
      dangerLight: false,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const {
      selectedCode,
      autoClose,
      closeButton,
      successDark,
      warningDark,
      infoDark,
      dangerDark,
      successLight,
      warningLight,
      infoLight,
      dangerLight,
    } = this.state

    return (
      <>
        <InfoCodeRow id="notificationnDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Notification
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            <Tag>Notification</Tag> can be used to give feedbacks or short
            messages to the user. <Tag>isOpen</Tag> & <Tag>onClose</Tag> needs
            to be passed for the notification to work. In addition,{" "}
            <Tag>prefix</Tag> & <Tag>suffix</Tag> can be used to put icons with
            the notifications.
          </Text>
          {/* IconButton */}
          <Text textColor="black" textSize="subheader" textWeight="500">
            Type
          </Text>
          <Text textColor="medium" m={{ b: "1rem" }}>
            Notification are of two types - auto closed & closed by users. If{" "}
            <Tag>onClose</Tag> is passed to the notification it becomes auto
            closed notifation.
          </Text>

          <Div d="flex" pos="relative" m={{ b: "1rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={notificationDocsCode1}
              selectedValue={selectedCode}
            />
            <Button
              bg="gray700"
              hoverBg="gray600"
              m={{ r: "0.5rem" }}
              onClick={() => this.setState({ autoClose: true })}
            >
              Show auto close notification
            </Button>
            <Notification
              isOpen={autoClose}
              onClose={() => this.setState({ autoClose: false })}
            >
              This notification is self closable
            </Notification>
          </Div>
          <Div d="flex" pos="relative" m={{ b: "2rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={notificationDocsCode2}
              selectedValue={selectedCode}
            />
            <Button
              bg="gray700"
              hoverBg="gray600"
              m={{ r: "0.5rem" }}
              onClick={() => this.setState({ closeButton: true })}
            >
              Show notification closed by icon
            </Button>
            <Notification
              isOpen={closeButton}
              suffix={
                <Icon
                  name="Cross"
                  pos="absolute"
                  top="1rem"
                  right="0.5rem"
                  color="white"
                  size="18px"
                  cursor="pointer"
                  m={{ r: "0.5rem" }}
                  onClick={() => this.setState({ closeButton: false })}
                />
              }
            >
              This notification will close by button
            </Notification>
          </Div>

          {/* Dark Notifications */}
          <Text
            textColor="black"
            textSize="subheader"
            textWeight="500"
            m={{ b: "0.5rem" }}
          >
            Dark Notifications
          </Text>
          <Div d="flex" pos="relative" m={{ b: "2rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={notificationDocsCode3}
              selectedValue={selectedCode}
            />
            <Div d="flex">
              <Button
                bg="success700"
                hoverBg="success600"
                m={{ r: "0.5rem" }}
                onClick={() => this.setState({ successDark: true })}
              >
                Success
              </Button>
              <Notification
                bg="success700"
                isOpen={successDark}
                onClose={() => this.setState({ successDark: false })}
                prefix={
                  <Icon
                    name="Success"
                    color="white"
                    size="18px"
                    m={{ r: "0.5rem" }}
                  />
                }
              >
                This is a success message
              </Notification>
              <Button
                bg="warning700"
                hoverBg="warning600"
                m={{ r: "0.5rem" }}
                onClick={() => this.setState({ warningDark: true })}
              >
                Warning
              </Button>
              <Notification
                bg="warning700"
                isOpen={warningDark}
                onClose={() => this.setState({ warningDark: false })}
                prefix={
                  <Icon
                    name="AlertSolid"
                    color="white"
                    size="18px"
                    m={{ r: "0.5rem" }}
                  />
                }
              >
                This is a warning message
              </Notification>
              <Button
                bg="info700"
                hoverBg="info600"
                m={{ r: "0.5rem" }}
                onClick={() => this.setState({ infoDark: true })}
              >
                Info
              </Button>
              <Notification
                bg="info700"
                isOpen={infoDark}
                onClose={() => this.setState({ infoDark: false })}
                prefix={
                  <Icon
                    name="InfoSolid"
                    color="white"
                    size="18px"
                    m={{ r: "0.5rem" }}
                  />
                }
              >
                This is a info message
              </Notification>
              <Button
                bg="danger700"
                hoverBg="danger600"
                m={{ r: "0.5rem" }}
                onClick={() => this.setState({ dangerDark: true })}
              >
                Alert
              </Button>
              <Notification
                bg="danger700"
                isOpen={dangerDark}
                onClose={() => this.setState({ dangerDark: false })}
                prefix={
                  <Icon
                    name="CloseSolid"
                    color="white"
                    size="18px"
                    m={{ r: "0.5rem" }}
                  />
                }
              >
                This is a alert message
              </Notification>
            </Div>
          </Div>

          {/* Light Notifications */}
          <Text
            textColor="black"
            textSize="subheader"
            textWeight="500"
            m={{ b: "0.5rem" }}
          >
            Light Notifications
          </Text>
          <Div d="flex" pos="relative" m={{ b: "2rem" }}>
            <ShowCodeButton
              onClick={this.toggleSelectedCode}
              value={notificationDocsCode4}
              selectedValue={selectedCode}
            />
            <Div d="flex">
              <Button
                bg="success300"
                hoverBg="success400"
                textColor="success800"
                m={{ r: "0.5rem" }}
                onClick={() => this.setState({ successLight: true })}
              >
                Success
              </Button>
              <Notification
                bg="success100"
                textColor="success800"
                isOpen={successLight}
                onClose={() => this.setState({ successLight: false })}
                prefix={
                  <Icon
                    name="Success"
                    color="success800"
                    size="18px"
                    m={{ r: "0.5rem" }}
                  />
                }
              >
                This is a success message
              </Notification>
              <Button
                bg="warning300"
                hoverBg="warning400"
                textColor="warning800"
                m={{ r: "0.5rem" }}
                onClick={() => this.setState({ warningLight: true })}
              >
                Warning
              </Button>
              <Notification
                bg="warning100"
                textColor="warning800"
                isOpen={warningLight}
                onClose={() => this.setState({ warningLight: false })}
                prefix={
                  <Icon
                    name="Alert"
                    color="warning800"
                    size="18px"
                    m={{ r: "0.5rem" }}
                  />
                }
              >
                This is a warning message
              </Notification>
              <Button
                bg="info300"
                hoverBg="info400"
                textColor="info800"
                m={{ r: "0.5rem" }}
                onClick={() => this.setState({ infoLight: true })}
              >
                Info
              </Button>
              <Notification
                bg="info100"
                textColor="info800"
                isOpen={infoLight}
                onClose={() => this.setState({ infoLight: false })}
                prefix={
                  <Icon
                    name="Info"
                    color="info800"
                    size="18px"
                    m={{ r: "0.5rem" }}
                  />
                }
              >
                This is a info message
              </Notification>
              <Button
                bg="danger300"
                hoverBg="danger400"
                textColor="danger800"
                m={{ r: "0.5rem" }}
                onClick={() => this.setState({ dangerLight: true })}
              >
                Alert
              </Button>
              <Notification
                bg="danger100"
                textColor="danger800"
                isOpen={dangerLight}
                onClose={() => this.setState({ dangerLight: false })}
                prefix={
                  <Icon
                    name="Close"
                    color="danger800"
                    size="18px"
                    m={{ r: "0.5rem" }}
                  />
                }
              >
                This is a alert message
              </Notification>
            </Div>
          </Div>
        </InfoCodeRow>
      </>
    )
  }
}

export default NotificationDocs
