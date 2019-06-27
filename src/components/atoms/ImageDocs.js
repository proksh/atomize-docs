import React from "react";
import { Div, Text, Tag, Row, Col, Image } from "react-atomize";

import InfoCodeRow from "../common/InfoCodeRow";

const imageDocCode1 = `// Images
import { Iamge, Div, Row, Col } from "react-atomize";

const BasicImages = () => {
  return (
    <Row>
      <Col>
        <Image src="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
      </Col>
      <Col>
        <Div
          bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          bgSize="cover"
          bgPos="center"
          h="20rem"
        />
      </Col>
    </Row>
  );
}
`;

class ImageDocs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCode: imageDocCode1
    };

    this.toggleSelectedCode = this.toggleSelectedCode.bind(this);
  }

  toggleSelectedCode(value) {
    this.setState({ selectedCode: value });
  }

  render() {
    const { selectedCode } = this.state;

    return (
      <>
        <InfoCodeRow id="imageDocs" code={selectedCode}>
          <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
            Image
          </Text>
          <Text textColor="medium" textSize="body" m={{ b: "4rem" }}>
            You can use <Tag>{'<Image src="image/url" />'}</Tag> for rendering
            an image component, or if you want to maintain a const ratio you can
            use it in background like
            <Tag textAlign="left">
              {'<Div bgImg="image/url" bgSize="cover" />'}
            </Tag>
          </Text>
          <Div pos="relative" m={{ b: "1rem" }}>
            <Row>
              <Col>
                <Image src="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
              </Col>
              <Col>
                <Div
                  bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  bgSize="cover"
                  bgPos="center"
                  h="20rem"
                />
              </Col>
            </Row>
          </Div>
        </InfoCodeRow>
      </>
    );
  }
}

export default ImageDocs;
