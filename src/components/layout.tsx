"use client"
import { Flex } from "@chakra-ui/react"
import React from "react"
import Sidebar from "./navigation/sideNav"
import Header from "./navigation/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        <Flex
          padding={["6", "12"]}
          marginLeft={[0, "200px"]}
          width={["100%", "calc(100% - 200px)"]}
          marginTop="50px"
        >
          {children}
        </Flex>
      </Flex>
    </>
  )
}

export default Layout
