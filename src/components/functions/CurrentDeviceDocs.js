import React from "react"
import { Text, Tag } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"

const scrollToDocsCode1 = `// perform function only when device is xl
import { Button, currentDevice } from "react-atomize";

const CurrentDecieAlert = () => {

  componentDidMount() {
    const deviceSize = currentDevice()
    deviceSize === "xl" && this.deviceIsXL()
  }

  deviceIsXL = () => {
    alert("Current device is xl")
  }
  
  render() {
      return (
          {/* Your Component */}
      )
  }
}`

class CurrentDeviceDocs extends React.Component {
  render() {
    return (
      <InfoCodeRow
        id="currentDeviceDocs"
        code={scrollToDocsCode1}
        pb="0"
        border={false}
      >
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          CurrentDevice
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "2rem" }}>
          <Tag>currentDevice</Tag> function can be used to find the current
          device name according to the devices in responsiveness, i.e. it
          returns a string from <Tag>xs</Tag>, <Tag>sm</Tag>, <Tag>md</Tag>,{" "}
          <Tag>lg</Tag> or <Tag>xl</Tag> according to the current device in use.
        </Text>
      </InfoCodeRow>
    )
  }
}

export default CurrentDeviceDocs
