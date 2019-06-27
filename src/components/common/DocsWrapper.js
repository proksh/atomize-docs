import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Div, Icon, Image } from "react-atomize"
import Sidebar from "../../components/common/Sidebar"
import logo from "../../images/logo.png"

const DocsWrapper = ({ siteTitle, children }) => (
  <Div>
    <Div
      d={{ xs: "flex", md: "none" }}
      p={{ x: "2rem", y: "2rem" }}
      justify="space-between"
      border={{ b: "1px solid" }}
      borderColor="gray300"
    >
      <Image src={logo} h="18px" w="auto" />
      <Icon name="Menu" size="20px" />
    </Div>
    <Sidebar />
    <Div
      m={{ l: { xs: "0", md: "16rem" } }}
      w={{ xs: "100%", md: "calc(100vw - 16rem)" }}
      flexGrow="1"
      id="pageContent"
    >
      {children}
    </Div>
  </Div>
)

export default DocsWrapper
