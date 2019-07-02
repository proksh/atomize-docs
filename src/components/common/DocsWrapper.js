import React from "react"
import { Div } from "react-atomize"
import Sidebar from "../../components/common/Sidebar"

const DocsWrapper = ({ siteTitle, children }) => (
  <Div>
    <Sidebar />
    <Div
      m={{ l: { xs: "0", md: "16rem" } }}
      p={{ t: { xs: "4rem", md: "0" } }}
      w={{ xs: "100%", md: "calc(100vw - 16rem)" }}
      flexGrow="1"
      id="pageContent"
    >
      {children}
    </Div>
  </Div>
)

export default DocsWrapper
