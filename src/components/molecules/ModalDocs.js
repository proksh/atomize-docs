import React from "react"
import { Div, Text, Tag, Button, Modal, Icon } from "react-atomize"

import InfoCodeRow from "../common/InfoCodeRow"
import ShowCodeButton from "../common/ShowCodeButton"
import AvailableProps from "../common/AvailableProps"

const modalDocsCode1 = `// Basic Modal
import { Div, Button, Modal, Icon, Text } from "react-atomize";

const AlignStartModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="start" rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Do you really want to submit the request.
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
  );
};

class BasicModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ b: "1rem" }}
          onClick={() => this.setState({ showModal: true })}
        >
          Open Basic Modal (Align Start)
        </Button>
        <AlignStartModal
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default BasicModal;`

const modalDocsCode2 = `// Aligned Centered
import { Div, Button, Modal, Icon, Text } from "react-atomize";

const AlignCenterModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Do you really want to submit the request.
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
  );
};

class AlignedModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ b: "1rem" }}
          onClick={() => this.setState({ showModal: true })}
        >
          Align Center
        </Button>
        <AlignCenterModal
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default AlignedModal;`

const modalDocsCode3 = `// Custom Margin
import { Div, Button, Modal, Icon, Text } from "react-atomize";

const Rem4FromTopModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      m={{ y: "4rem", x: { xs: "1rem", lg: "auto" } }}
      rounded="md"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Do you really want to submit the request.
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
  );
};

class CustomMarginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ b: "1rem" }}
          onClick={() => this.setState({ showModal: true })}
        >
          4rem to top
        </Button>
        <Rem4FromTopModal
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default CustomMarginModal;`

const modalDocsCode4 = `// 24rem width Modal
import { Div, Button, Modal, Icon, Text } from "react-atomize";

const ModalSize = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="md"
      maxW="24rem"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />

      <Text
        p={{ l: "0.5rem", t: "0.25rem" }}
        m={{ b: "2rem" }}
      >
        This modal has maxW of 24rem
      </Text>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Close
        </Button>
        <Button onClick={onClose} bg="info700">
          OK
        </Button>
      </Div>
    </Modal>
  );
};

class SmallModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() =>
            this.setState({ showModal: true })
          }
        >
          Open 24rem width modal
        </Button>
        <ModalSize
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default SmallModal;`

const modalDocsCode5 = `// 32rem width Modal
import { Div, Button, Modal, Icon, Text } from "react-atomize";

const ModalSize = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="md"
      maxW="32rem"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />

      <Text
        p={{ l: "0.5rem", t: "0.25rem" }}
        m={{ b: "2rem" }}
      >
        This modal has maxW of {maxW}
      </Text>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Close
        </Button>
        <Button onClick={onClose} bg="info700">
          OK
        </Button>
      </Div>
    </Modal>
  );
};

class MediumModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() =>
            this.setState({ showModal: true })
          }
        >
          Open 32rem width modal
        </Button>
        <ModalSize
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default MediumModal;`

const modalDocsCode6 = `// 48rem width Modal
import { Div, Button, Modal, Icon, Text } from "react-atomize";

const ModalSize = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="md"
      maxW="48rem"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />

      <Text
        p={{ l: "0.5rem", t: "0.25rem" }}
        m={{ b: "2rem" }}
      >
        This modal has maxW of 48rem
      </Text>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Close
        </Button>
        <Button onClick={onClose} bg="info700">
          OK
        </Button>
      </Div>
    </Modal>
  );
};

class LargeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() =>
            this.setState({ showModal: true })
          }
        >
          Open 48rem width modal
        </Button>
        <ModalSize
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default LargeModal;`

const modalDocsCode7 = `// Full Screen Modal
import { Div, Button, Modal, Icon, Text } from "react-atomize";

const ModalSize = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="0"
      maxW="100vw"
      m="0"
      h="100vh"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />

      <Text
        p={{ l: "0.5rem", t: "0.25rem" }}
        m={{ b: "2rem" }}
        h="calc(100vh - 10rem)"
      >
        This modal has maxW of 100vw
      </Text>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Close
        </Button>
        <Button onClick={onClose} bg="info700">
          OK
        </Button>
      </Div>
    </Modal>
  );
};

class FullScreenModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() =>
            this.setState({ showModal: true })
          }
        >
          Open Full Screen modal
        </Button>
        <ModalSize
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default FullScreenModal;`

const modalDocsCode8 = `// Submitting Modal
import { Div, Button, Modal, Icon, Text } from "react-atomize";

class ModalWithSubmitting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitting: false
    };

    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickSubmit() {
    const { onClose } = this.props;

    this.setState({ isSubmitting: true });

    setTimeout(() => {
      this.setState({ isSubmitting: false });
      onClose();
    }, 600);
  }

  render() {
    const { isOpen, onClose } = this.props;
    const { isSubmitting } = this.state;

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        m={{ y: "4rem", x: { xs: "1rem", lg: "auto" } }}
        rounded="md"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={onClose}
          cursor="pointer"
        />
        <Text
          p={{ l: "0.5rem", t: "0.25rem" }}
          textSize="subheader"
          m={{ b: "2rem" }}
        >
          Submit to see the submitting state.
        </Text>
        <Div d="flex" justify="flex-end">
          <Button
            onClick={onClose}
            bg="gray200"
            textColor="medium"
            m={{ r: "1rem" }}
          >
            Cancel
          </Button>
          <Button
            isLoading={isSubmitting}
            onClick={this.onClickSubmit}
            bg={isSubmitting ? "info300" : "info700"}
          >
            Yes, Submit
          </Button>
        </Div>
      </Modal>
    );
  }
}

class SubmittingStateModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ showModal: true })}
        >
          Show Submit Modal
        </Button>
        <ModalWithSubmitting
          isOpen={showModal}
          onClose={() => this.setState({ showModal: false })}
        />
      </>
    );
  }
}

export default SubmittingStateModal;`

class ModalDocs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCode: modalDocsCode1,
      alignStartModalOpen: false,
      alignCenterModalOpen: false,
      rem4FromTopModalOpen: false,
      sizeModalOpen: false,
      selectedSize: "32rem",
      submitModalOpen: false,
    }

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this)
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value })
  }

  render() {
    const {
      selectedCode,
      alignStartModalOpen,
      alignCenterModalOpen,
      rem4FromTopModalOpen,
      sizeModalOpen,
      selectedSize,
      submitModalOpen,
    } = this.state

    return (
      <InfoCodeRow id="modalDocs" code={selectedCode}>
        <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
          Modal
        </Text>
        <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
          When requiring users to interact with the application, but without
          jumping to a new page and interrupting the user's workflow, you can
          use <Tag>Modal</Tag> to create a new floating layer over the current
          page. You need to pass <Tag>isOpen</Tag> & <Tag>onClose</Tag> to the
          Modal.
        </Text>

        {/* Modal Alignment */}
        <Text textColor="black" textSize="subheader" textWeight="500">
          Alignments
        </Text>
        <Text textColor="medium" m={{ b: "1rem" }}>
          Modal can be aligned centered by passing <Tag>align="center"</Tag>.
          Additionally <Tag>m</Tag> can be controlled as shown in utilities.
        </Text>

        {/* Basic Modal */}
        <Div d="flex" pos="relative">
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={modalDocsCode1}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ b: "1rem" }}
            onClick={() => this.setState({ alignStartModalOpen: true })}
          >
            Open Basic Modal (Align Start)
          </Button>
          <AlignStartModal
            isOpen={alignStartModalOpen}
            onClose={() => this.setState({ alignStartModalOpen: false })}
          />
        </Div>

        {/* Align Center */}
        <Div d="flex" pos="relative">
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={modalDocsCode2}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ b: "1rem" }}
            onClick={() => this.setState({ alignCenterModalOpen: true })}
          >
            Open Aligned Center Modal
          </Button>
          <AlignCenterModal
            isOpen={alignCenterModalOpen}
            onClose={() => this.setState({ alignCenterModalOpen: false })}
          />
        </Div>

        {/* 4 rem to Top */}
        <Div d="flex" pos="relative" m={{ b: "2rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={modalDocsCode3}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ b: "1rem" }}
            onClick={() => this.setState({ rem4FromTopModalOpen: true })}
          >
            Open Modal with m of 4rem in y
          </Button>
          <Rem4FromTopModal
            isOpen={rem4FromTopModalOpen}
            onClose={() => this.setState({ rem4FromTopModalOpen: false })}
          />
        </Div>

        {/* Modal Size */}
        <Text
          textColor="black"
          textSize="subheader"
          textWeight="500"
          m={{ b: "0.5rem" }}
        >
          Size
        </Text>
        <Div d="flex" pos="relative" m={{ b: "1rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={modalDocsCode4}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() =>
              this.setState({ sizeModalOpen: true, selectedSize: "24rem" })
            }
          >
            Open 24rem width modal
          </Button>
        </Div>
        <Div d="flex" pos="relative" m={{ b: "1rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={modalDocsCode5}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() =>
              this.setState({ sizeModalOpen: true, selectedSize: "32rem" })
            }
          >
            Open 32rem width modal
          </Button>
        </Div>
        <Div d="flex" pos="relative" m={{ b: "1rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={modalDocsCode6}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() =>
              this.setState({ sizeModalOpen: true, selectedSize: "48rem" })
            }
          >
            Open 48rem width modal
          </Button>
        </Div>
        <Div d="flex" pos="relative" m={{ b: "2rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={modalDocsCode7}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() =>
              this.setState({ sizeModalOpen: true, selectedSize: "100vw" })
            }
          >
            Open Full Screen modal
          </Button>
          <ModalSize
            maxW={selectedSize}
            isOpen={sizeModalOpen}
            onClose={() => this.setState({ sizeModalOpen: false })}
          />
        </Div>

        {/* Moadal With Submitting */}
        <Text
          textColor="black"
          textSize="subheader"
          textWeight="500"
          m={{ b: "1rem" }}
        >
          Submit Modal
        </Text>

        <Div d="flex" pos="relative" m={{ b: "2rem" }}>
          <ShowCodeButton
            onClick={this.toggleSelectedCode}
            value={modalDocsCode8}
            selectedValue={selectedCode}
          />
          <Button
            bg="info700"
            hoverBg="info600"
            m={{ r: "0.5rem" }}
            onClick={() => this.setState({ submitModalOpen: true })}
          >
            Show Submit Modal
          </Button>
          <ModalWithSubmitting
            isOpen={submitModalOpen}
            onClose={() => this.setState({ submitModalOpen: false })}
          />
        </Div>
        <AvailableProps
          defaultProps={{
            isOpen: "false",
            m: '{y: { xs: "1rem", lg: "2rem" }, x: { xs: "1rem", lg: "auto" }}',
            p: "2rem",
            maxW: "32rem",
            w: "100%",
            pos: "relative",
            shadow: "4",
            cursor: "default",
            align: "start",
          }}
          available={[
            "isOpen",
            "onClose",
            "onEntering",
            "onEnter",
            "onExiting",
            "onExit",
            "onExited",
            "p",
            "m",
            "d",
            "align",
            "justify",
            "flexDir",
            "flexGrow",
            "flexWrap",
            "rounded",
            "bg",
            "hoverBg",
            "bgImg",
            "bgPos",
            "bgSize",
            "h",
            "minH",
            "maxH",
            "w",
            "minW",
            "maxW",
            "border",
            "borderColor",
            "hoverBorderColor",
            "focusBg",
            "focusBorderColor",
            "focusShadow",
            "textSize",
            "textWeight",
            "textDecor",
            "textTransform",
            "textAlign",
            "textColor",
            "hoverTextColor",
            "fontFamily",
            "shadow",
            "hoverShadow",
            "position",
            "top",
            "left",
            "right",
            "bottom",
            "transform",
            "transition",
            "overflow",
            "cursor",
          ]}
        />
      </InfoCodeRow>
    )
  }
}

export default ModalDocs

const AlignStartModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="start" rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Do you really want to submit the request.
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
  )
}

const AlignCenterModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md">
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Do you really want to submit the request.
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
  )
}

const Rem4FromTopModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      m={{ y: "4rem", x: { xs: "1rem", lg: "auto" } }}
      rounded="md"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          Do you really want to submit the request.
        </Text>
      </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={onClose} bg="info700">
          Yes, Submit
        </Button>
      </Div>
    </Modal>
  )
}

const ModalSize = ({ isOpen, onClose, maxW }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      m={maxW === "100vw" ? "0" : undefined}
      rounded={maxW === "100vw" ? "0" : "md"}
      h={maxW === "100vw" ? "100vh" : undefined}
      maxW={maxW}
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={onClose}
        cursor="pointer"
      />

      <Text
        p={{ l: "0.5rem", t: "0.25rem" }}
        m={{ b: "2rem" }}
        h={maxW === "100vw" ? "calc(100vh - 10rem)" : undefined}
      >
        This modal has maxW of {maxW}
      </Text>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Close
        </Button>
        <Button onClick={onClose} bg="info700">
          OK
        </Button>
      </Div>
    </Modal>
  )
}

class ModalWithSubmitting extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSubmitting: false,
    }

    this.onClickSubmit = this.onClickSubmit.bind(this)
  }

  onClickSubmit() {
    const { onClose } = this.props

    this.setState({ isSubmitting: true })

    setTimeout(() => {
      this.setState({ isSubmitting: false })
      onClose()
    }, 600)
  }

  render() {
    const { isOpen, onClose } = this.props
    const { isSubmitting } = this.state

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        m={{ y: "4rem", x: { xs: "1rem", lg: "auto" } }}
        rounded="md"
      >
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={onClose}
          cursor="pointer"
        />
        <Text
          p={{ l: "0.5rem", t: "0.25rem" }}
          textSize="subheader"
          m={{ b: "2rem" }}
        >
          Submit to see the submitting state.
        </Text>
        <Div d="flex" justify="flex-end">
          <Button
            onClick={onClose}
            bg="gray200"
            textColor="medium"
            m={{ r: "1rem" }}
          >
            Cancel
          </Button>
          <Button
            isLoading={isSubmitting}
            onClick={this.onClickSubmit}
            bg={isSubmitting ? "info300" : "info700"}
          >
            Yes, Submit
          </Button>
        </Div>
      </Modal>
    )
  }
}
