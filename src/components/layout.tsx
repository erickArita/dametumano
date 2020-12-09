/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
 import Navbar from "./Navbar/Navbar"
import Header from "./header/Header"
import "normalize.css"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <header >
        <Navbar />
        <Header />
      </header>

      <main>{children}</main>
    </>
  )
}

export default Layout
